import { useState } from "react";
import { Send, CheckCircle, Calendar, Mail, Phone } from "lucide-react";
import { siteData } from "../data/siteData";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  eventType: "",
  eventDate: "",
  location: "",
  guestCount: "",
  message: "",
};

export default function Booking() {
  const { booking } = siteData;
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (booking.demoMode) {
      await new Promise((r) => setTimeout(r, 1000));
      setSubmitted(true);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(booking.formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      alert("Something went wrong. Please try again or email directly.");
    }
    setLoading(false);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 transition-colors";

  return (
    <section id="book" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {booking.title.split(" ")[0]}{" "}
              <span className="gradient-text">
                {booking.title.split(" ").slice(1).join(" ")}
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">{booking.subtitle}</p>

            <div className="space-y-4">
              <a
                href={`mailto:${siteData.email}`}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={20} className="text-orange-400" />
                {siteData.email}
              </a>
              <a
                href={`tel:${siteData.phone.replace(/\D/g, "")}`}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Phone size={20} className="text-orange-400" />
                {siteData.phone}
              </a>
              <p className="flex items-center gap-3 text-gray-300">
                <Calendar size={20} className="text-orange-400" />
                {siteData.location}
              </p>
            </div>

            {booking.demoMode && (
              <div className="mt-8 p-4 rounded-xl bg-orange-600/10 border border-orange-500/20 text-sm text-orange-300">
                Demo mode is on — form submissions show a success message but
                don&apos;t send emails. See README to connect a real form
                service.
              </div>
            )}
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="glass rounded-2xl p-12 text-center neon-border">
                <CheckCircle
                  size={64}
                  className="text-green-400 mx-auto mb-6"
                />
                <h3 className="font-display text-2xl font-bold mb-3">
                  Request Received!
                </h3>
                <p className="text-gray-400 mb-6">
                  Thanks, {form.name}! I&apos;ll review your event details and
                  get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm(initialForm);
                  }}
                  className="text-orange-400 hover:text-orange-300 transition-colors"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass rounded-2xl p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Event Type *
                    </label>
                    <select
                      name="eventType"
                      required
                      value={form.eventType}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="" disabled>
                        Select event type
                      </option>
                      {booking.eventTypes.map((type) => (
                        <option key={type} value={type} className="bg-gray-900">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Event Date *
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      required
                      value={form.eventDate}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Expected Guests
                    </label>
                    <input
                      type="text"
                      name="guestCount"
                      value={form.guestCount}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="e.g. 200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Event Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={form.location}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="City, State or Venue Name"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Tell me about your event, music preferences, special requests..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl btn-primary text-white font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={20} />
                      Send Booking Request
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
