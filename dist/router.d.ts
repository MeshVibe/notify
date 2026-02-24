import type { Priority, Channel, NotifyResult } from "./types.js";
export declare function getChannels(): Channel[];
export declare function send(message: string, options?: {
    title?: string;
    priority?: Priority;
    channel?: string;
}): NotifyResult[];
//# sourceMappingURL=router.d.ts.map