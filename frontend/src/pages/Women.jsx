"use client"

import { useRef, useEffect } from "react"

const Women = () => {
  const mentalHealthRef = useRef(null)
  const fitnessRef = useRef(null)
  const sexualHealthRef = useRef(null)
  const fashionRef = useRef(null)
  const sustainableFashionRef = useRef(null)
  const beautyRef = useRef(null)

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const refMap = {
        "#mental-health": mentalHealthRef,
        "#fitness": fitnessRef,
        "#sexual-health": sexualHealthRef,
        "#fashion": fashionRef,
        "#sustainable-fashion": sustainableFashionRef,
        "#beauty": beautyRef,
      };

      const ref = refMap[hash];
      if (ref) {
        scrollToSection(ref);
      }
    };

    handleHashChange(); // Run on mount

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const sectionStyle = {
    marginBottom: "40px",
  }

  const headingStyle = {
    fontSize: "24px",
    marginBottom: "16px",
  }

  const subHeadingStyle = {
    fontSize: "20px",
    marginBottom: "12px",
  }

  const paragraphStyle = {
    marginBottom: "16px",
  }

  const listStyle = {
    marginLeft: "20px",
    marginBottom: "16px",
  }

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "16px",
  }

  const cellStyle = {
    border: "1px solid #ddd",
    padding: "8px",
  }

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ fontSize: "32px", textAlign:'left', marginBottom: "24px" }}>
        Empower Your Well-being: Health, Wellness, and Style Guide for Women
      </h1>

      <img
        src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Women Fitness"
        style={{ width: "100%", height: "200px", marginBottom: "24px" }}
      />

      <div style={{ marginBottom: "24px", border: "1px solid #ccc", padding: "16px" }}>
        <h2 style={headingStyle}>Contents</h2>
        <ul style={listStyle}>
          <li>
            <button onClick={() => scrollToSection(mentalHealthRef)}>Mental Health & Self-Care</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(fitnessRef)}>Belly Fat Reduction & Physical Fitness</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(sexualHealthRef)}>Sexual Health & Awareness</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(fashionRef)}>Style Tips for Different Body Types & Occasions</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(sustainableFashionRef)}>Sustainable Fashion & Ethical Brands</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(beautyRef)}>
              Beauty Routines, Product Reviews & Makeup Tutorials
            </button>
          </li>
        </ul>
      </div>

      <div ref={mentalHealthRef} style={sectionStyle}>
        <h2 style={headingStyle}>Mental Health & Self-Care</h2>
        <p style={paragraphStyle}>
          Mental health is a crucial aspect of overall well-being for women. Common issues include anxiety disorders,
          depression, and burnout. It's important to recognize the signs and seek help when needed.
        </p>

        <h3 style={subHeadingStyle}>Common Mental Health Issues:</h3>
        <ul style={listStyle}>
          <li>Anxiety disorders (e.g., GAD, social anxiety, panic disorder)</li>
          <li>Depression (major depressive disorder, postpartum depression)</li>
          <li>Eating disorders</li>
          <li>PTSD and trauma-related disorders</li>
          <li>Burnout and chronic stress</li>
        </ul>

        <h3 style={subHeadingStyle}>Self-Care Strategies:</h3>
        <ul style={listStyle}>
          <li>Practice mindfulness and meditation</li>
          <li>Maintain a regular sleep schedule</li>
          <li>Exercise regularly</li>
          <li>Connect with friends and family</li>
          <li>Engage in hobbies and activities you enjoy</li>
          <li>Set boundaries and learn to say no</li>
          <li>Practice gratitude and positive self-talk</li>
        </ul>

        <h3 style={subHeadingStyle}>Treatment Options:</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={cellStyle}>Option</th>
              <th style={cellStyle}>Pros</th>
              <th style={cellStyle}>Cons</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={cellStyle}>Therapy (e.g., CBT, DBT)</td>
              <td style={cellStyle}>
                <ul>
                  <li>Addresses root causes</li>
                  <li>Teaches coping skills</li>
                  <li>No side effects</li>
                </ul>
              </td>
              <td style={cellStyle}>
                <ul>
                  <li>Can be expensive</li>
                  <li>Time-consuming</li>
                  <li>Requires active participation</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style={cellStyle}>Medication</td>
              <td style={cellStyle}>
                <ul>
                  <li>Can provide quick relief</li>
                  <li>Helps manage severe symptoms</li>
                </ul>
              </td>
              <td style={cellStyle}>
                <ul>
                  <li>Potential side effects</li>
                  <li>May require trial and error</li>
                  <li>Doesn't address root causes</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style={cellStyle}>Support Groups</td>
              <td style={cellStyle}>
                <ul>
                  <li>Provides community</li>
                  <li>Often free or low-cost</li>
                  <li>Shared experiences</li>
                </ul>
              </td>
              <td style={cellStyle}>
                <ul>
                  <li>May not be as personalized</li>
                  <li>Can be intimidating for some</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div ref={fitnessRef} style={sectionStyle}>
        <h2 style={headingStyle}>Belly Fat Reduction & Physical Fitness</h2>
        <p style={paragraphStyle}>
          Reducing belly fat is not just about aesthetics; it's crucial for overall health. Excess abdominal fat
          increases the risk of type 2 diabetes, cardiovascular diseases, and high blood pressure.
        </p>

        <h3 style={subHeadingStyle}>Understanding Belly Fat:</h3>
        <ul style={listStyle}>
          <li>Subcutaneous fat: Located just under the skin</li>
          <li>Visceral fat: Surrounds internal organs, more dangerous to health</li>
        </ul>

        <h3 style={subHeadingStyle}>Effective Strategies:</h3>
        <ul style={listStyle}>
          <li>Balanced diet rich in whole foods</li>
          <li>Regular cardiovascular exercise (e.g., HIIT, jogging, swimming)</li>
          <li>Strength training to build muscle and boost metabolism</li>
          <li>Adequate sleep (7-9 hours per night)</li>
          <li>Stress management techniques</li>
          <li>Staying hydrated</li>
          <li>Limiting alcohol and avoiding sugary drinks</li>
        </ul>

        <h3 style={subHeadingStyle}>Comparison of Weight Loss Approaches:</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={cellStyle}>Approach</th>
              <th style={cellStyle}>Pros</th>
              <th style={cellStyle}>Cons</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={cellStyle}>Cardio Workouts</td>
              <td style={cellStyle}>
                <ul>
                  <li>Burns calories efficiently</li>
                  <li>Improves cardiovascular health</li>
                  <li>Can be done anywhere</li>
                </ul>
              </td>
              <td style={cellStyle}>
                <ul>
                  <li>May not build significant muscle</li>
                  <li>Can be hard on joints</li>
                  <li>Might lead to plateau if not varied</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style={cellStyle}>Strength Training</td>
              <td style={cellStyle}>
                <ul>
                  <li>Builds muscle, boosts metabolism</li>
                  <li>Improves bone density</li>
                  <li>Helps with long-term weight management</li>
                </ul>
              </td>
              <td style={cellStyle}>
                <ul>
                  <li>May not burn as many calories during the workout</li>
                  <li>Requires equipment or gym membership</li>
                  <li>Risk of injury if not done properly</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style={cellStyle}>Keto Diet</td>
              <td style={cellStyle}>
                <ul>
                  <li>Can lead to rapid initial weight loss</li>
                  <li>May reduce appetite</li>
                  <li>Potential benefits for certain health conditions</li>
                </ul>
              </td>
              <td style={cellStyle}>
                <ul>
                  <li>Restrictive, may be difficult to maintain long-term</li>
                  <li>Potential nutrient deficiencies</li>
                  <li>May cause "keto flu" initially</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div ref={sexualHealthRef} style={sectionStyle}>
        <h2 style={headingStyle}>Sexual Health & Awareness</h2>
        <p style={paragraphStyle}>
          Sexual health is an important aspect of overall well-being. It's crucial to practice safe sex, understand
          birth control options, and be aware of common issues like PCOS, HPV, and STIs.
        </p>

        <h3 style={subHeadingStyle}>Key Points:</h3>
        <ul style={listStyle}>
          <li>Regular gynecological check-ups</li>
          <li>Understanding and choosing appropriate birth control methods</li>
          <li>Practicing safe sex to prevent STIs</li>
          <li>Awareness of symptoms related to PCOS, HPV, and other common conditions</li>
          <li>Importance of HPV vaccination</li>
          <li>Understanding menstrual health and tracking cycles</li>
          <li>Addressing sexual dysfunction and seeking help when needed</li>
        </ul>

        <h3 style={subHeadingStyle}>Comparison of Birth Control Methods:</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={cellStyle}>Method</th>
              <th style={cellStyle}>Pros</th>
              <th style={cellStyle}>Cons</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={cellStyle}>Hormonal Pills</td>
              <td style={cellStyle}>
                <ul>
                  <li>Highly effective when used correctly</li>
                  <li>Can regulate menstrual cycles</li>
                  <li>May reduce acne and menstrual cramps</li>
                </ul>
              </td>
              <td style={cellStyle}>
                <ul>
                  <li>Requires daily adherence</li>
                  <li>Potential side effects (e.g., mood changes, weight gain)</li>
                  <li>Doesn't protect against STIs</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style={cellStyle}>IUD</td>
              <td style={cellStyle}>
                <ul>
                  <li>Long-lasting (3-10 years)</li>
                  <li>Highly effective</li>
                  <li>Low maintenance</li>
                </ul>
              </td>
              <td style={cellStyle}>
                <ul>
                  <li>Insertion can be uncomfortable</li>
                  <li>Potential for heavier periods (copper IUD)</li>
                  <li>Doesn't protect against STIs</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style={cellStyle}>Condoms</td>
              <td style={cellStyle}>
                <ul>
                  <li>Protects against STIs</li>
                  <li>No hormonal side effects</li>
                  <li>Easily accessible</li>
                </ul>
              </td>
              <td style={cellStyle}>
                <ul>
                  <li>Lower effectiveness rate than some other methods</li>
                  <li>Requires consistent and correct use</li>
                  <li>May reduce sensation</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div ref={fashionRef} style={sectionStyle}>
        <h2 style={headingStyle}>Style Tips for Different Body Types & Occasions</h2>
        <p style={paragraphStyle}>
          Fashion is a form of self-expression, and understanding your body type can help you choose outfits that make
          you feel confident and comfortable.
        </p>

        <h3 style={subHeadingStyle}>Body Types and Style Tips:</h3>
        <ul style={listStyle}>
          <li>Pear Shape: Balance proportions with wider tops and A-line skirts</li>
          <li>Apple Shape: Create definition with empire waists and V-neck tops</li>
          <li>Hourglass: Emphasize your waist with belted dresses and fitted jackets</li>
          <li>Rectangle: Add curves with ruffles, peplums, and wrap dresses</li>
          <li>Inverted Triangle: Balance with wider bottom pieces and boat neck tops</li>
        </ul>

        <h3 style={subHeadingStyle}>Dressing for Different Occasions:</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={cellStyle}>Occasion</th>
              <th style={cellStyle}>Style Tips</th>
              <th style={cellStyle}>Things to Avoid</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={cellStyle}>Casual</td>
              <td style={cellStyle}>
                <ul>
                  <li>Comfortable jeans or leggings</li>
                  <li>Soft, breathable tops</li>
                  <li>Sneakers or flats</li>
                </ul>
              </td>
              <td style={cellStyle}>
                <ul>
                  <li>Overly formal pieces</li>
                  <li>Uncomfortable shoes</li>
                  <li>Restrictive clothing</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style={cellStyle}>Work</td>
              <td style={cellStyle}>
                <ul>
                  <li>Tailored blazers</li>
                  <li>Knee-length skirts or trousers</li>
                  <li>Modest blouses</li>
                </ul>
              </td>
              <td style={cellStyle}>
                <ul>
                  <li>Too revealing clothing</li>
                  <li>Overly casual items (e.g., ripped jeans)</li>
                  <li>Distracting accessories</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style={cellStyle}>Formal</td>
              <td style={cellStyle}>
                <ul>
                  <li>Elegant dresses</li>
                  <li>Well-fitted suits</li>
                  <li>Sophisticated accessories</li>
                </ul>
              </td>
              <td style={cellStyle}>
                <ul>
                  <li>Casual fabrics (e.g., denim)</li>
                  <li>Overly revealing styles</li>
                  <li>Flashy or inappropriate prints</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div ref={sustainableFashionRef} style={sectionStyle}>
        <h2 style={headingStyle}>Sustainable Fashion & Ethical Brands</h2>
        <p style={paragraphStyle}>
          Sustainable fashion focuses on reducing the environmental impact of clothing production and consumption. By
          choosing eco-friendly and ethical brands, you can look great while supporting responsible practices.
        </p>

        <h3 style={subHeadingStyle}>Benefits of Sustainable Fashion:</h3>
        <ul style={listStyle}>
          <li>Reduces environmental impact</li>
          <li>Supports fair labor practices</li>
          <li>Often results in higher quality, longer-lasting clothing</li>
          <li>Promotes a more mindful approach to consumption</li>
          <li>Encourages innovation in textile production</li>
        </ul>

        <h3 style={subHeadingStyle}>Sustainable Fashion Practices:</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={cellStyle}>Practice</th>
              <th style={cellStyle}>Pros</th>
              <th style={cellStyle}>Cons</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={cellStyle}>Buying Second-hand</td>
              <td style={cellStyle}>
                <ul>
                  <li>Reduces waste</li>
                  <li>Often more affordable</li>
                  <li>Unique pieces</li>
                </ul>
              </td>
              <td style={cellStyle}>
                <ul>
                  <li>Limited selection</li>
                  <li>May require more effort to find specific items</li>
                  <li>Potential quality issues</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style={cellStyle}>Choosing Eco-friendly Materials</td>
              <td style={cellStyle}>
                <ul>
                  <li>Lower environmental impact</li>
                  <li>Often more durable</li>
                  <li>Supports sustainable agriculture</li>
                </ul>
              </td>
              <td style={cellStyle}>
                <ul>
                  <li>Can be more expensive</li>
                  <li>Limited variety in some cases</li>
                  <li>May require special care</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style={cellStyle}>Capsule Wardrobe</td>
              <td style={cellStyle}>
                <ul>
                  <li>Reduces overconsumption</li>
                  <li>Simplifies decision-making</li>
                  <li>Encourages quality over quantity</li>
                </ul>
              </td>
              <td style={cellStyle}>
                <ul>
                  <li>Initial investment can be high</li>
                  <li>Requires careful planning</li>
                  <li>May feel limiting for some</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div ref={beautyRef} style={sectionStyle}>
        <h2 style={headingStyle}>Beauty Routines, Product Reviews & Makeup Tutorials</h2>
        <p style={paragraphStyle}>
          A good beauty routine can enhance your natural features and boost your confidence. It's important to find
          products and techniques that work for your skin type and personal style.
        </p>

        <h3 style={subHeadingStyle}>Basic Skincare Routine:</h3>
        <ol style={listStyle}>
          <li>Cleanse: Remove dirt, oil, and makeup</li>
          <li>Tone (optional): Balance skin pH and remove any remaining impurities</li>
          <li>Treat: Apply serums or treatments for specific skin concerns</li>
          <li>Moisturize: Hydrate and protect the skin</li>
          <li>Apply sunscreen (during the day): Protect from UV damage</li>
        </ol>

        <h3 style={subHeadingStyle}>Comparison of Skincare Approaches:</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={cellStyle}>Approach</th>
              <th style={cellStyle}>Pros</th>
              <th style={cellStyle}>Cons</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={cellStyle}>Natural/Organic</td>
              <td style={cellStyle}>
                <ul>
                  <li>Fewer synthetic ingredients</li>
                  <li>Potentially gentler on skin</li>
                  <li>Environmentally friendly</li>
                </ul>
              </td>
              <td style={cellStyle}>
                <ul>
                  <li>Shorter shelf life</li>
                  <li>May be less potent</li>
                  <li>Often more expensive</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style={cellStyle}>K-Beauty (Multi-step)</td>
              <td style={cellStyle}>
                <ul>
                  <li>Customizable for skin needs</li>
                  <li>Focus on hydration</li>
                  <li>Often includes innovative ingredients</li>
                </ul>
              </td>
              <td style={cellStyle}>
                <ul>
                  <li>Time-consuming</li>
                  <li>Can be overwhelming</li>
                  <li>Potential for over-exfoliation</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style={cellStyle}>Minimalist</td>
              <td style={cellStyle}>
                <ul>
                  <li>Simple and quick</li>
                  <li>Less risk of irritation</li>
                  <li>Often more affordable</li>
                </ul>
              </td>
              <td style={cellStyle}>
                <ul>
                  <li>May not address all skin concerns</li>
                  <li>Limited variety in routine</li>
                  <li>Might miss out on beneficial ingredients</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>

        <p style={paragraphStyle}>
          Remember, everyone's skin is different, so it may take some experimentation to find the perfect routine for
          you. Always patch test new products and introduce them one at a time to identify any potential reactions.
        </p>
      </div>
    </div>
  )
}

export default Women

