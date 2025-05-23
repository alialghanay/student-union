import Image from "next/image";

const Head = () => {
  return (
    <div className="text-center">
      <div className="relative">
        <Image src="/join-us.png" alt="join-us" width={1920} height={1080} />
        <h1 className="absolute top-16 right-2 font-bold text-5xl text-white p-4">
          انضم إلى اتحاد الطلبة وساهم في <br />
          تطوير الحياة الجامعية
        </h1>
      </div>
      <h1 className="m-8">
        من خلال انضمامك إلى اتحاد الطلبة، يمكنك المشاركة في تطوير المبادرات
        الطلابية، تنظيم الفعاليات،
        <br />
        والمساهمة في تحسين الخدمات الجامعية لصنع تجربة تعليمية أفضل للجميع.
      </h1>
    </div>
  );
};

export default Head;
