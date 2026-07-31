"use client";

import { useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createBooking,
  deleteBooking,
  getAllBookings,
  getBooking,
  seedDatabase,
  updateBooking,
} from "@/lib/db";
import type { Booking } from "@/lib/types";

export const BOOKINGS_QUERY_KEY = ["bookings"];

/** Seeds the database once on app start. */
export function useSeedDatabase() {
  useEffect(() => {
    void seedDatabase();
  }, []);
}

export function useBookings() {
  return useQuery({
    queryKey: BOOKINGS_QUERY_KEY,
    queryFn: getAllBookings,
  });
}

export function useBooking(id: number) {
  return useQuery({
    queryKey: [...BOOKINGS_QUERY_KEY, id],
    queryFn: () => getBooking(id),
    enabled: Number.isFinite(id),
  });
}

export function useCreateBooking() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (booking: Omit<Booking, "id" | "createdAt">) =>
      createBooking(booking),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: BOOKINGS_QUERY_KEY });
    },
  });
}

export function useUpdateBooking() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, changes }: { id: number; changes: Partial<Booking> }) =>
      updateBooking(id, changes),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: BOOKINGS_QUERY_KEY });
    },
  });
}

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => deleteBooking(id),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: BOOKINGS_QUERY_KEY });
    },
  });
}
