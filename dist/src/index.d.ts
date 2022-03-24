declare type sendPollReturnResultPoll = {
    id: string;
    question: string;
    options: {
        text: string;
        voter_count: number;
    }[];
    total_voter_count: number;
    is_closed: boolean;
    is_anonymous: boolean;
    type: string;
    allows_multiple_answers: boolean;
};
declare type sendPollReturnResult = {
    message_id: number;
    from: resultFrom;
    chat: resultChat;
    date: number;
    poll: sendPollReturnResultPoll;
};
declare type sendPollReturn = {
    ok: boolean;
    result: sendPollReturnResult;
};
declare type getUpdatesReturnFrom = {
    message_id: number;
    from: resultFrom;
    chat: resultChat;
    date: number;
    text: string;
};
declare type getUpdatesReturn = {
    ok: boolean;
    result: {
        update_id: number;
        message: getUpdatesReturnFrom;
    }[];
};
declare type sendDiceReturnResultDice = {
    emoji: string;
    value: number;
};
declare type sendDiceReturnResult = {
    message_id: number;
    from: resultFrom;
    chat: resultChat;
    date: number;
    dice: sendDiceReturnResultDice;
};
declare type sendDiceReturn = {
    ok: boolean;
    result: sendDiceReturnResult;
};
declare type sendContactReturnResultContact = {
    phone_number: string;
    first_name: string;
};
declare type sendContactReturnResult = {
    message_id: number;
    from: sendContactReturnResultContact;
    chat: resultChat;
    date: number;
    contact: sendContactReturnResult;
};
declare type sendContactReturn = {
    ok: boolean;
    result: sendContactReturnResult;
};
declare type resultChat = {
    id: number;
    firstName: string;
    type: string;
};
declare type resultFrom = {
    id: number;
    is_bot: boolean;
    firstName: string;
    username: string;
};
declare type sendMessageResult = {
    message_id: number;
    from: resultFrom;
    chat: resultChat;
    date: number;
    text: string;
};
declare type sendMessageReturn = {
    ok: boolean;
    result: sendMessageResult;
};
declare type sendContact = {
    chatId?: string;
    phoneNumber: string;
    firstName: string;
    disableNotification?: boolean;
};
declare type sendPoll = {
    question: string;
    options: string[];
    type?: string;
    correctOptionID?: number;
    chatId?: string;
    disableNotification?: boolean;
    isAnonymous?: boolean;
};
declare type sendMessage = {
    message: string;
    chatId?: string;
    disableNotification?: boolean;
};
export default class TelegramBot {
    token: string;
    chatId?: string;
    path: string;
    constructor(botToken: string, chatId?: string);
    publicCall(method: string, qs: string): Promise<any>;
    sendMessage({ message, chatId, disableNotification }: sendMessage): Promise<sendMessageReturn>;
    sendContact({ phoneNumber, firstName, chatId, disableNotification }: sendContact): Promise<sendContactReturn>;
    sendPoll({ question, options, type, correctOptionID, chatId, disableNotification, isAnonymous }: sendPoll): Promise<sendPollReturn>;
    sendDice(chatId?: string, disableNotification?: boolean): Promise<sendDiceReturn>;
    getUpdates(): Promise<getUpdatesReturn>;
}
export {};
