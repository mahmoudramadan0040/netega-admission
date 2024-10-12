"use client"
import { useState } from "react";
import { useRouter } from 'next/navigation';
function National_Component() {
    const [nationalId, setNationalId] = useState("");
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`show/${nationalId}`);
    };
    return ( 

    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="nationalId" className="text-lg font-bold text-center">الرقم القومي أو رقم الجلوس</label>
        <input className="text-lg font-bold"
          type="text"
          id="nationalId"
          value={nationalId}
          onChange={(e) => setNationalId(e.target.value)}
          placeholder="الرقم القومي أو رقم الجلوس"
          required
        />
        <button type="submit">Submit</button>
      </form>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          padding: 20px;
        }
        .form {
          width: 100%;
          max-width: 400px;
          background-color: #f9f9f9;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        label {
          font-size: 1.2rem;
          margin-bottom: 8px;
          display: block;
        }
        input {
          width: 100%;
          padding: 10px;
          font-size: 1rem;
          margin-bottom: 20px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        button {
          width: 100%;
          padding: 10px;
          background-color: #0070f3;
          color: dark;
          font-size: 1rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        button:hover {
          background-color: #005bb5;
        }

        @media (max-width: 600px) {
          .container {
            padding: 10px;
          }
          .form {
            padding: 15px;
          }
          label,
          input,
          button {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
     );
}

export default National_Component;