import { useState, useEffect } from "react";
import axios from "axios";
import GuestDetails from "./GuestDetails.jsx";

export default function App() {
  const [guests, setGuests] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);

  useEffect(() => {
    const fetchGuests = async () => {
      const { data } = await axios.get(
        "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2510-ftb-et-web-ft/guests"
      );
      console.log(data);
      setGuests(data.data);
    };
    fetchGuests();
  }, []);

  return (
    <div className="list">
      <h1>Guest List</h1>

      <div className="guest-layout">
        <section className="guest-names">
          <h2>Name</h2>
          {guests.map((guest) => {
            return (
              <div key={guest.id} className="clickDiv">
                <span
                  className="clickSpan"
                  onClick={() => {
                    setSelectedGuest(guest);
                  }}
                >
                  {guest.name}
                </span>
              </div>
            );
          })}
        </section>

        {selectedGuest ? (
          <GuestDetails
            selectedGuest={selectedGuest}
            setSelectedGuest={setSelectedGuest}
          />
        ) : (
          <div className="details">
            <h2>Details</h2>
            <h3>Click a guest to view their information</h3>
          </div>
        )}
      </div>
    </div>
  );
}
