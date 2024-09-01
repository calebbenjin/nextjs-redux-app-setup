"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Modal from "./Modal";
import { FaUserPlus } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoCameraOutline } from "react-icons/io5";
import fetchToken from "@/lib/auth";
import PhotoCapture from "./PhotoCapture";
import { MdAddPhotoAlternate } from "react-icons/md";

const FormSchema = z.object({
  idnumber: z.string().min(2, {
    message: "Enter Identification number",
  }),
  beneficiary: z.string({
    message: "beneficiary is missing",
  }),
  firstName: z.string({
    message: "beneficiary is missing",
  }),
  surename: z.string({
    message: "beneficiary is missing",
  }),
  otherName: z.string({
    message: "beneficiary is missing",
  }),
  nationality: z.string({
    message: "Nationality is missing",
  }),
  gender: z.string({
    required_error: "Please select your gender.",
  }),
  birthcountry: z.string({
    message: "A country of birth is required.",
  }),
  birthyear: z.string({
    message: "Year of birth is required.",
  }),
  birthplace: z.string({
    message: "A place of birth is required.",
  }),
  registered: z.string({
    message: "Registration is required.",
  }),
  phone: z.string({
    message: "Telephone is required.",
  }),
  maritalStatus: z.string({
    message: "Telephone is required.",
  }),
});

const AddBeneficiaryForm = () => {
  const [previewSrc, setPreviewSrc] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleFileChange = async (e: any) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreviewSrc(reader.result as string);
      };

      reader.readAsDataURL(file);
      setSelectedFile(file);
    } else {
      setPreviewSrc("");
    }
  };

  const saveProfileImage = async () => {
    // setLoading(true);
    try {
      if (selectedFile) {
        const formdata = new FormData();
        formdata.append("profile_picture", selectedFile);

        const token = await fetchToken();
        const headers = {
          Authorization: `Bearer ${token?.data?.token}`,
          Accept: "application/json",
        };
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/mobile/user-update`,
          {
            method: "POST",
            headers,
            body: formdata,
          }
        );

        const resdata = await res.json();
        // if (resdata?.status == "success") {
        //   setLoading(false);
        //   toast.success("Image Saved ✅");
        // }
      }
    } catch (error) {}
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      idnumber: "",
      beneficiary: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
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
    <div>
      <Button
        onClick={handleOpenModal}
        className="px-16 py-6 font-semibold bg-blue-800 hover:bg-blue-500">
        <FaUserPlus className="h-8 w-8 pr-2" /> Add Beneficiary
      </Button>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        className="max-w-4xl px-10">
        <h2 className="text-2xl font-bold">Add Beneficiary</h2>
        <div className="form mt-10">
          <div className="flex items-center justify-center w-full">
            <div className="flex items-center space-x-10 w-full">
              <div className="w-full">
                {/* {selectedFile ? (
                  <div className="text-center">
                    <button
                      onClick={saveProfileImage}
                      className="text-center mx-auto bg-orange-400 px-6 py-2 mt-2 rounded-lg text-white">
                      {loading ? "Saving... " : "Save"}
                    </button>
                  </div>
                ) : (
                  <p className="text-center mt-2">Edit Profile</p>
                )} */}

                <div className="grid lg:grid-cols-2 gap-20 mb-10">
                  <div>
                    <div className="flex items-center justify-center relative">
                      {selectedFile && (
                        <div className="lg:w-24 lg:h-24 w-20 h-20 relative">
                          <Avatar className="p-0 m-0 lg:w-24 lg:h-24 w-20 h-20 border border-gray-600">
                            <AvatarImage className="w-100" src={previewSrc} />
                            <AvatarFallback className="font-bold lg:text-2xl">
                              CB
                            </AvatarFallback>
                          </Avatar>
                        </div>
                      )}
                    </div>
                    <label
                      htmlFor="fileInput"
                      className="flex justify-center text-white items-center h-10 w-full bg-blue-800  rounded-md p-2 cursor-pointer">
                      <MdAddPhotoAlternate className="text-4xl text-white" />
                      upload image
                      <input
                        type="file"
                        id="fileInput"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                  <PhotoCapture />
                </div>
              </div>
            </div>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full lg:space-y-6 space-y-4">
              <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-4 ">
                <FormField
                  control={form.control}
                  name="idnumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Identification number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Identification number"
                          {...field}
                          className="border border-gray-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="beneficiary"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type of beneficiary</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <FormControl className="border border-gray-400">
                          <SelectTrigger>
                            <SelectValue placeholder="Choose..." />
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
              </div>

              <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10 gap-4 ">
                <FormField
                  control={form.control}
                  name="surename"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Surename</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Surename"
                          {...field}
                          className="border border-gray-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="First name"
                          {...field}
                          className="border border-gray-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="otherName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Other names</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Othername"
                          {...field}
                          className="border border-gray-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10 gap-4">
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gender</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <FormControl className="border border-gray-400">
                          <SelectTrigger>
                            <SelectValue placeholder="Choose..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="birthcountry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country of birth</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <FormControl className="border border-gray-400">
                          <SelectTrigger>
                            <SelectValue placeholder="Choose..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="m@example.com">
                            m@example.com
                          </SelectItem>
                          <SelectItem value="m@google.com">
                            m@google.com
                          </SelectItem>
                          <SelectItem value="m@support.com">
                            m@support.com
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="nationality"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nationality</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <FormControl className="border border-gray-400">
                          <SelectTrigger>
                            <SelectValue placeholder="Choose..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="m@example.com">
                            m@example.com
                          </SelectItem>
                          <SelectItem value="m@google.com">
                            m@google.com
                          </SelectItem>
                          <SelectItem value="m@support.com">
                            m@support.com
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10 gap-4 ">
                <FormField
                  control={form.control}
                  name="birthcountry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Year of Birth</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter year of birth"
                          {...field}
                          className="border border-gray-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="birthplace"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Place of birth</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter place of birth"
                          {...field}
                          className="border border-gray-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="registered"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Registered</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <FormControl className="border border-gray-400">
                          <SelectTrigger>
                            <SelectValue placeholder="Choose..." />
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

              <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-4 ">
                <FormField
                  control={form.control}
                  name="maritalStatus"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Marital status</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <FormControl className="border border-gray-400">
                          <SelectTrigger>
                            <SelectValue placeholder="Choose... marital status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="married">Married</SelectItem>
                          <SelectItem value="single">Single</SelectItem>
                          <SelectItem value="separated">Separated</SelectItem>
                          <SelectItem value="divorced">Divorced</SelectItem>
                          <SelectItem value="widow">Widow</SelectItem>
                          <SelectItem value="widower">Widower</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telephone</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="+234...."
                          {...field}
                          className="border border-gray-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex justify-between items-center">
                <Button
                variant="outline"
                  onClick={handleCloseModal}
                  className="mt-6 px-4 py-2 rounded-md ">
                  Cancle
                </Button>
                <Button type="submit" className="w-full lg:w-6/12">
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default AddBeneficiaryForm;
