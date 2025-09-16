export type LeaderboardData = {
    event: string;
    owner_id: number;
    members: Record<string,LeaderboardMember>;
}

export type LeaderboardMember = {
    global_score: number;
    id: number;
    last_star_ts: number;
    local_score: number;
    name: string | null;
    stars: number;
    completion_day_level: Record<string, Record<string,CompletionInfo>>
}

export type CompletionInfo = {
    get_star_ts: number;
    star_index: number;
}