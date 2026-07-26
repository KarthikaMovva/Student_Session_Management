import { useQuery } from "@tanstack/react-query";
import { getSessions } from "@/services/session.service";

export function useSessions() {
    return useQuery({
        queryKey: ["sessions"],
        queryFn: getSessions,
    });
}