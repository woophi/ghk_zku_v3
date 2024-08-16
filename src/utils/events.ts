declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

type Payload = {
  autopayments: 1 | 0;
  limit: 1 | 0;
  limit_sum: number;
  insurance: 1 | 0;
  email: string;
};

export const sendDataToGA = async (payload: Payload) => {
  try {
    const now = new Date();
    const date = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    await fetch(
      'https://script.google.com/macros/s/AKfycbyCnateN4e-C4Vj4h7entOD45YZFcvCqkL21sY6ne1tcvzpxc-k4F49XaBCnax7Haw0Qg/exec',
      {
        redirect: 'follow',
        method: 'POST',
        body: JSON.stringify({ date, ...payload, variant: 'variant3' }),
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
      },
    );
  } catch (error) {
    console.error('Error!', error);
  }
};
