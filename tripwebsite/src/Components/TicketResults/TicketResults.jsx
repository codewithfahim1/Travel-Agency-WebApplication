import { useLocation } from 'react-router-dom';

function TicketResults() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const location = params.get('location');
  const date = params.get('date');
  const travellerClass = params.get('travellerClass');

  const dummyTickets = [
    {
      id: 1,
      airline: 'EcoFly',
      destination: location,
      date,
      class: travellerClass,
      price: '$199',
    },
    {
      id: 2,
      airline: 'GreenWings',
      destination: location,
      date,
      class: travellerClass,
      price: '$249',
    },
  ];

  return (
    <div className="results-page">
      <h2>Tickets to {location}</h2>
      {dummyTickets.map((ticket) => (
        <div key={ticket.id} className="ticket-card">
          <h3>{ticket.airline}</h3>
          <p>Departure: {ticket.date}</p>
          <p>Class: {ticket.class}</p>
          <p>Price: {ticket.price}</p>
          <button>Book Now</button>
        </div>
      ))}
    </div>
  );
}

export default TicketResults;
