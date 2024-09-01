"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
  beneficiary: z.string().min(2, {
    message: "Beneficiary ID or Name is missing!.",
  }),
  services: z.string({
    message: "Beneficiary ID or Name is missing!.",
  }),
  enrolled: z.string({
    message: "Beneficiary ID or Name is missing!.",
  }),
  dropOut: z.string({
    message: "Beneficiary ID or Name is missing!.",
  }),
  failed: z.string({
    message: "Beneficiary ID or Name is missing!.",
  }),
  completed: z.string({
    message: "Beneficiary ID or Name is missing!.",
  }),
  date: z.date({
    required_error: "A date is required.",
  }),
  details: z
    .string()
    .min(10, {
      message: "Details must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
});

const BeneficaryResult = () => {
    const [result, setResult] = useState(false);
    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        beneficiary: "",
      },
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
      setResult(true);
      toast({
        title: "You submitted the following values:",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });
    }
    
  return (
    <div className="w-full">
      <div className="flex items-center justify-between lg:flex-row flex-col lg:space-y-0 space-y-8 ">
        <h2 className="font-bold text-2xl">Beneficiary search result</h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" flex items-center">
            <FormField
              control={form.control}
              name="beneficiary"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Search for beneficiary..."
                      {...field}
                      className="border border-gray-400 w-[300px] rounded-r-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="bg-blue-800 hover:bg-blue-700 rounded-l-none">
              Search
            </Button>
          </form>
        </Form>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 my-10">
        <div className="bg-white shadow-lg rounded-md">
          <div className="p-5 bg-blue-900 text-white rounded-t-md">
            <h2 className="font-semibold text-lg">Service to be offered</h2>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="p-8 space-y-4">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                <FormField
                  control={form.control}
                  name="services"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Select Service</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <FormControl className="border border-gray-400">
                          <SelectTrigger>
                            <SelectValue placeholder="Select services" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="asylum_seekers">
                            Asylum seekers
                          </SelectItem>
                          <SelectItem value="host-communities">
                            Refugee Host Communities
                          </SelectItem>
                          <SelectItem value="refugee">Refugee</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal border-gray-400",
                                !field.value && "text-muted-foreground"
                              )}>
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                <FormField
                  control={form.control}
                  name="enrolled"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Enrolled</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <FormControl className="border border-gray-400">
                          <SelectTrigger>
                            <SelectValue placeholder="Select...." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dropOut"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Drop out</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <FormControl className="border border-gray-400">
                          <SelectTrigger>
                            <SelectValue placeholder="Select..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="failed"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Failed</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <FormControl className="border border-gray-400">
                          <SelectTrigger>
                            <SelectValue placeholder="Select..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="completed"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Completed</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <FormControl className="border border-gray-400">
                          <SelectTrigger>
                            <SelectValue placeholder="Select..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="details"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Details (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Write details"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="mt-6">
                <Button
                  type="submit"
                  className="bg-blue-800 hover:bg-blue-700 px-20">
                  Save service
                </Button>
              </div>
            </form>
          </Form>
        </div>

        <div className="bg-white shadow-lg rounded-md">
          <div className="p-5 bg-blue-900 text-white rounded-t-md">
            <h2 className="font-semibold text-lg">Beneficiary Information</h2>
          </div>
          <div className="pb-8">
            <div className="flex items-center justify-between border-b border-gray-400 py-4 px-10">
              <p className="font-semibold">Name</p>
              <p className="">John deo</p>
            </div>
            <div className="flex items-center justify-between border-b border-gray-400 py-4 px-10">
              <p className="font-semibold">Name</p>
              <p className="">John deo</p>
            </div>
            <div className="flex items-center justify-between border-b border-gray-400 py-4 px-10">
              <p className="font-semibold">Name</p>
              <p className="">John deo</p>
            </div>
            <div className="flex items-center justify-between border-b border-gray-400 py-4 px-10">
              <p className="font-semibold">Name</p>
              <p className="">John deo</p>
            </div>
          </div>
          <div className="p-5 bg-blue-200 rounded-t-md">
            <h2 className="font-semibold text-lg">Service received</h2>
          </div>
          <div className="bg-white">
            <div className="flex items-center justify-between border-b border-gray-400 py-4 px-10">
              <p className="font-semibold">Name</p>
              <p className="">John deo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeneficaryResult;
