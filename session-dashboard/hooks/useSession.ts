import { useQuery } from "@tanstack/react-query";
import { getSessionById } from "@/services/session.service";


export function useSession(id: number) {

    return useQuery({
        queryKey: ["session", id],
        queryFn: () => getSessionById(id),
        enabled: !!id,
    });

}