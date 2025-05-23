import Image from "next/image";

const Head = () => {
  return (
    <div className="text-center">
      <div className="relative">
        <Image src="/about-us.png" alt="about-us" width={1920} height={1080} />
        <h1 className="absolute top-16 right-2 font-bold text-5xl text-white p-4">
          موقع اتحاد الطلبة داخل الجامعة – <br />
          حيث يمكنك التواصل معنا مباشرة
        </h1>
      </div>
      <h1 className="m-8">
        نحن هنا في مقر اتحاد الطلبة لنكون نقطة التواصل بينك وبين كافة الأنشطة
        والفعاليات التي تهدف إلى تحسين حياتك الجامعية.
        <br />
        زيارة مقرنا تتيح لك الفرصة للمشاركة في تنظيم الفعاليات، تقديم
        الاقتراحات،
        <br />
        أو ببساطة للتواصل مع الفريق الذي يسعى لتحسين تجربتك الجامعية
      </h1>
    </div>
  );
};

export default Head;
