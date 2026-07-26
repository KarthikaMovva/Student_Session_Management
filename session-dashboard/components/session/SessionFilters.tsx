"use client";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";


interface SessionFiltersProps {
    students: string[];
    selectedStudent: string;
    setSelectedStudent: (
        value: string
    ) => void;
    fromDate?: Date;
    setFromDate: (
        date?: Date
    ) => void;
    toDate?: Date;
    setToDate: (
        date?: Date
    ) => void;
}



export default function SessionFilters({
    students,
    selectedStudent,
    setSelectedStudent,
    fromDate,
    setFromDate,
    toDate,
    setToDate,
}: SessionFiltersProps) {


    return (

        <div className="flex flex-col gap-4 rounded-xl border bg-white p-4 md:flex-row">
            <Select
                value={selectedStudent}
                onValueChange={setSelectedStudent}
            >
                <SelectTrigger className="w-full md:w-[220px]">
                    <SelectValue placeholder="Select student" />
                </SelectTrigger>


                <SelectContent>
                    <SelectItem value="all">
                        All Students
                    </SelectItem>
                    {students.map((student) => (
                        <SelectItem
                            key={student}
                            value={student}
                        >
                            {student}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <Popover>
                <PopoverTrigger>
                    <div
                        className="
                        flex
                        h-8
                        w-full
                        md:w-[220px]
                        items-center
                        rounded-lg
                        border
                        px-3
                        text-sm
                        cursor-pointer
                        bg-background
                        hover:bg-muted
                        "
                    >
                        {fromDate
                            ? format(fromDate, "PPP")
                            : "From date"
                        }
                    </div>
                </PopoverTrigger>


                <PopoverContent>
                    <Calendar
                        mode="single"
                        selected={fromDate}
                        onSelect={setFromDate}
                    />
                </PopoverContent>

            </Popover>

            <Popover>

                <PopoverTrigger>
                    <div
                        className="
                        flex
                        h-8
                        w-full
                        md:w-[220px]
                        items-center
                        rounded-lg
                        border
                        px-3
                        text-sm
                        cursor-pointer
                        bg-background
                        hover:bg-muted">
                        {toDate
                            ? format(toDate, "PPP")
                            : "To date"}
                    </div>
                </PopoverTrigger>

                <PopoverContent>
                    <Calendar
                        mode="single"
                        selected={toDate}
                        onSelect={setToDate}
                    />
                </PopoverContent>
            </Popover>
        </div>

    );
}