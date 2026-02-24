export type Priority = "low" | "medium" | "high" | "critical";
export interface Channel {
    name: string;
    type: string;
    available: boolean;
    minPriority: Priority;
}
export interface NotifyResult {
    channel: string;
    success: boolean;
    error?: string;
}
//# sourceMappingURL=types.d.ts.map