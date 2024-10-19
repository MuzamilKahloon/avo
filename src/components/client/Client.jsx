import React from 'react';
import '../../components/client/Client.css';
import img7 from '../../../public/avo-images/person_1.jpg';
import img8 from '../../../public/avo-images/person_2.jpg';
import img9 from '../../../public/avo-images/person_3.jpg';

// Testimonial data
const testimonials = [
  {
    name: "Roger Scott",
    role: "Marketing Manager",
    image: img7,
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
  },
  {
    name: "Alice Johnson",
    role: "Marketing Manager",
    image: img8,
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
  },
  {
    name: "John Doe",
    role: "Marketing Manager",
    image: img9,
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
  }
];

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2>Clients Says About Us?</h2>
      <div className="testimonial-cards">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="quote">“{testimonial.text}”</p>
            <div className="testimonial-info">
              <img src={testimonial.image} alt={testimonial.name} />
              <div>
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="indicator-dots">
        {testimonials.map((_, index) => (
          <span key={index} className={`dot`} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
