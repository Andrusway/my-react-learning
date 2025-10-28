interface MailboxProps {
username: string;
messages: string[];
}

export default function Mailbox({username, messages}: MailboxProps) {
    return (
        // <div>
        //     <p>Hello {username}</p>
        //     {messages.length > 0 && (
        //         <p>You have {messages.length} unread messages</p>
        //     )}
        // </div>
        <div>
            <p>Hello {username}</p>
            {messages.length >0 ? (
                <p>You have {messages.length} unread messages</p>
            ) : (
                <p>You have no unread messages</p>
            ) }
        </div>
    )
}