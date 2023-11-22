import CreateTicket from './forms/CreateTicket';
import DisplayTickets from './DisplayTickets';


function TicketPage() {
    return (
        <>
            <div className="mt-3 d-grid gap-2 col-6 mx-auto text-center">
                <h5>Create your ticket here</h5>
                <CreateTicket />
            </div>

            <div className="mt-5 d-grid gap-2 col-6 mx-auto text-center">
                <h5>Current Ticket</h5>
                <DisplayTickets />
            </div>

        </>
    );
}

export default TicketPage;