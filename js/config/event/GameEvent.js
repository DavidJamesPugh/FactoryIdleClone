/**
 * GameEvent constants - defines all game-related event types
 * Extracted from original_app.js
 */
define("config/event/GameEvent", [], function() {
    return {
        GAME_TICK: "GAME_TICK",
        MONEY_UPDATED: "MONEY_UPDATED",
        RESEARCH_POINTS_UPDATED: "RESEARCH_POINTS_UPDATED",
        ACHIEVEMENT_RECEIVED: "ACHIEVEMENT_RECEIVED",
        TOGGLE_TICKS: "TOGGLE_TICKS",
        TICKS_STOPPED: "TICKS_STOPPED",
        TICKS_STARTED: "TICKS_STARTED",
        BONUS_TICKS_UPDATED: "BONUS_TICKS_UPDATED",
        TIME_TRAVEL_TICKETS_UPDATED: "TIME_TRAVEL_TICKETS_UPDATED",
        FOCUS: "FOCUS",
        BLUR: "BLUR",
        RESEARCH_BOUGHT: "RESEARCH_BOUGHT",
        BACKGROUND_MODE_ACTIVATED: "BACKGROUND_MODE_ACTIVATED",
        BACKGROUND_MODE_DISABLED: "BACKGROUND_MODE_DISABLED"
    };
});
