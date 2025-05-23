import Image from "next/image";

const Head = () => {
  return (
    <div className="text-center">
      <div className="relative">
        <Image
          src="/complaints.png"
          alt="complaints"
          width={1920}
          height={1080}
        />
        <h1 className="absolute top-16 right-2 font-bold text-5xl text-white p-4">
          واجهت مشكلة؟ قدم شكواك
          <br />
          وسنعمل على حلها
        </h1>
      </div>
      <h1 className="m-8">
        نحن نقدر ملاحظاتك ونسعى دائمًا لتحسين تجربتك. إذا واجهت أي مشكلة أو لديك
        أي شكوى،
        <br />
        يمكنك تقديمها من خلال هذا النموذج، وسنعمل جاهدين على معالجتها بأسرع وقت
        ممكن.
      </h1>
    </div>
  );
};

export default Head;
