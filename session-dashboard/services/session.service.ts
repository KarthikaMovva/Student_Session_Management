import { api } from "@/lib/api";
import { Session } from "@/types/sessions";

export const getSessions = async (): Promise<Session[]> => {
    const response = await api.get("/sessions");
    return response.data;
};

export const getSessionById = async (
    id: number
): Promise<Session> => {
    const response = await api.get(`/sessions/${id}`);
    return response.data;
};