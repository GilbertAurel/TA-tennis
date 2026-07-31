"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import { PageContainer } from "@/components/page-container";
import { useCreateBooking } from "@/hooks/use-bookings";
import { BOOKING_STATUSES } from "@/lib/types";
import { cn } from "@/lib/utils";

const bookingSchema = z
  .object({
    referenceNumber: z.string().min(1, "Reference number is required"),
    category: z.string().min(1, "Category is required"),
    facilityName: z.string().min(1, "Facility name is required"),
    eventName: z.string().min(1, "Event name is required"),
    description: z.string().min(1, "Description is required"),
    location: z.string().min(1, "Location is required"),
    date: z.string().min(1, "Date is required"),
    startTime: z.string().min(1, "Start time is required"),
    endTime: z.string().min(1, "End time is required"),
    status: z.enum(BOOKING_STATUSES),
  })
  .refine((data) => data.endTime > data.startTime, {
    message: "End time must be after start time",
    path: ["endTime"],
  });

type BookingFormValues = z.infer<typeof bookingSchema>;

const inputClass =
  "w-full rounded-xl border border-[#e5e7eb] bg-white px-3.5 py-2.5 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-muted focus:border-accent";
const labelClass = "mb-1.5 block text-[13px] font-medium text-ink-secondary";
const errorClass = "mt-1 text-xs font-medium text-cancel";

export default function AdminPage() {
  const router = useRouter();
  const createBooking = useCreateBooking();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      status: "NEW",
      date: "2026-08-01",
      startTime: "14:00",
      endTime: "15:00",
    },
  });

  const onSubmit = async (values: BookingFormValues) => {
    await createBooking.mutateAsync(values);
    router.push("/");
  };

  return (
    <PageContainer>
      <header className="sticky top-0 z-20 flex items-center bg-white px-4 pb-3 pt-5">
        <button
          type="button"
          aria-label="Back"
          onClick={() => router.back()}
          className="flex h-9 w-9 items-center justify-center text-accent transition-opacity active:opacity-60"
        >
          <ChevronLeft className="h-6 w-6" strokeWidth={2.25} />
        </button>
        <h1 className="flex-1 pr-9 text-center text-[17px] font-semibold text-ink">
          New Booking
        </h1>
      </header>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-1 flex-col gap-4 px-5 pb-10 pt-5"
        noValidate
      >
        <div>
          <label htmlFor="referenceNumber" className={labelClass}>
            Reference Number
          </label>
          <input
            id="referenceNumber"
            className={cn(inputClass, errors.referenceNumber && "border-cancel")}
            placeholder="329394/07/26/FB"
            {...register("referenceNumber")}
          />
          {errors.referenceNumber && (
            <p className={errorClass}>{errors.referenceNumber.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="category" className={labelClass}>
            Category
          </label>
          <input
            id="category"
            className={cn(inputClass, errors.category && "border-cancel")}
            placeholder="Facility Booking"
            {...register("category")}
          />
          {errors.category && (
            <p className={errorClass}>{errors.category.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="facilityName" className={labelClass}>
            Facility Name
          </label>
          <input
            id="facilityName"
            className={cn(inputClass, errors.facilityName && "border-cancel")}
            placeholder="Tennis Court A"
            {...register("facilityName")}
          />
          {errors.facilityName && (
            <p className={errorClass}>{errors.facilityName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="eventName" className={labelClass}>
            Event Name
          </label>
          <input
            id="eventName"
            className={cn(inputClass, errors.eventName && "border-cancel")}
            placeholder="niko"
            {...register("eventName")}
          />
          {errors.eventName && (
            <p className={errorClass}>{errors.eventName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="description" className={labelClass}>
            Description
          </label>
          <textarea
            id="description"
            rows={3}
            className={cn(inputClass, "resize-none", errors.description && "border-cancel")}
            placeholder="Describe the booking…"
            {...register("description")}
          />
          {errors.description && (
            <p className={errorClass}>{errors.description.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="location" className={labelClass}>
            Location
          </label>
          <input
            id="location"
            className={cn(inputClass, errors.location && "border-cancel")}
            placeholder="STD.35.N"
            {...register("location")}
          />
          {errors.location && (
            <p className={errorClass}>{errors.location.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="date" className={labelClass}>
            Date
          </label>
          <input
            id="date"
            type="date"
            className={cn(inputClass, errors.date && "border-cancel")}
            {...register("date")}
          />
          {errors.date && <p className={errorClass}>{errors.date.message}</p>}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="startTime" className={labelClass}>
              Start Time
            </label>
            <input
              id="startTime"
              type="time"
              className={cn(inputClass, errors.startTime && "border-cancel")}
              {...register("startTime")}
            />
            {errors.startTime && (
              <p className={errorClass}>{errors.startTime.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="endTime" className={labelClass}>
              End Time
            </label>
            <input
              id="endTime"
              type="time"
              className={cn(inputClass, errors.endTime && "border-cancel")}
              {...register("endTime")}
            />
            {errors.endTime && (
              <p className={errorClass}>{errors.endTime.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="status" className={labelClass}>
            Status
          </label>
          <select id="status" className={inputClass} {...register("status")}>
            {BOOKING_STATUSES.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
          {errors.status && (
            <p className={errorClass}>{errors.status.message}</p>
          )}
        </div>

        <motion.button
          type="submit"
          whileTap={{ scale: 0.98 }}
          disabled={isSubmitting || createBooking.isPending}
          className="mt-4 w-full rounded-xl bg-accent py-3.5 text-base font-semibold text-white transition-opacity disabled:opacity-50"
        >
          {createBooking.isPending ? "Saving…" : "Save"}
        </motion.button>
      </form>
    </PageContainer>
  );
}
