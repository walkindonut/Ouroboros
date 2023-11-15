const TicketController = {
    async createTicket(req, res, { Ticket }) {
        const ticket = new Ticket(req.body);
        return await ticket.save();
    },
    async getTickets(req, res, { Ticket }) {
        const { title: partialTicketTitle } = req.query;
        if (partialTicketTitle) {
            const tickets = await Ticket.find({ title: { $regex: new RegExp(partialTicketTitle), $options: "i" } });
            return tickets;
        } else {
            const tickets = await Ticket.find();
            return tickets;
        }
    },
    async getTicketById(req, res, { Ticket }) {
        const { id } = req.params;
        const ticket = await Ticket.findById(id);
        if (!ticket)
            throw new Error('Ticket not found');
        return ticket;
    },
    async updateTicket(req, res, { Ticket }) {
        const { id } = req.params;
        const ticket = await Ticket.findByIdAndUpdate(id, req.body, { new: true });
        if (!ticket)
            throw new Error('Ticket not found');
        return ticket;
    },
    async deleteTicket(req, res, { Ticket }) {
        const { id } = req.params;
        const ticket = await Ticket.findByIdAndDelete(id);
        if (!ticket)
            throw new Error('Ticket not found');
        return ticket;
    },
    async deleteAllTickets(req, res, { Ticket }) {
        const tickets = await Ticket.deleteMany();
        return tickets;
    }
};

module.exports = TicketController;
