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
import BeneficaryResult from "@/components/BeneficaryResult";

const SearchSchema = z.object({
  beneficiary: z.string().min(2, {
    message: "Beneficiary ID or Name is missing!.",
  }),
});

const BeneficairyPage = () => {
  const [result, setResult] = useState(false);
  const form = useForm<z.infer<typeof SearchSchema>>({
    resolver: zodResolver(SearchSchema),
    defaultValues: {
      beneficiary: "",
    },
  });

  function onSubmit(data: z.infer<typeof SearchSchema>) {
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
    <main className="flex items-center justify-center">
      {!result && (
        <div className="text-center mt-40 w-full">
          <h1 className="font-bold text-2xl ">Find Beneficiary</h1>
          <p className="mb-8">Enter beneficiary name or ID number</p>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="lg:w-4/12 w-10/12 mx-auto space-y-6">
              <FormField
                control={form.control}
                name="beneficiary"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Search for beneficiary..."
                        {...field}
                        className="border border-gray-400"
                      />
                    </FormControl>
                    <FormDescription>
                      This is will public display beneficiary details.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="bg-blue-800 hover:bg-blue-700 px-20">
                Search
              </Button>
            </form>
          </Form>
        </div>
      )}

      {result && (
        <BeneficaryResult />
      )}
    </main>
  );
};

export default BeneficairyPage;
