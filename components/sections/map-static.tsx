export function MapStatic() {
  return (
    <div className="h-full min-h-[400px] rounded-lg overflow-hidden border">
      {/* Placeholder iframe - replace with proper Google Maps embed if needed */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.123456789!2d-9.123456!3d38.765432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDQ0JzU1LjQiTiA5OcKwNTQnMzMuOCJX!5e0!3m2!1spt-PT!2spt!4v1234567890"
        width="100%"
        height="100%"
        style={{ minHeight: "400px", border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização A Grelha"
      />
    </div>
  );
}
