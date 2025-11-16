const GuestDetails = ({ selectedGuest, setSelectedGuest }) => {
  return (
    <div>
      <h2>Details</h2>
      <p>{selectedGuest.job}</p>
      <p>{selectedGuest.bio}</p>
      <p>{selectedGuest.email}</p>
      <p>{selectedGuest.phone}</p>

      <button
        onClick={() => {
          setSelectedGuest(null);
        }}
        className="back-button"
      >
        Back
      </button>
    </div>
  );
};

export default GuestDetails;
