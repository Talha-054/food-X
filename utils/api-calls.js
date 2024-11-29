export async function sendEmail(emailData) {
    const response = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    });
  
    const data = await response.json();
    return data;
  }
  