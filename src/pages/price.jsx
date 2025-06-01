const PricePage = () => {
  const plans = [
    {
      title: "Gói Đội nhóm",
      subtitle: "Dành cho đội nhóm",
      users: "2 đến 20 người",
      price: "750.000 ₫ một tháng cho mỗi người dùng",
      note: "Thanh toán hàng năm. Hủy bất cứ lúc nào.",
      buttonLabel: "Dùng thử miễn phí",
      features: [
        "Truy cập vào hơn 13.000 khóa học hàng đầu",
        "Luyện thi chứng chỉ",
        "Các đề xuất tập trung vào mục tiêu",
        "Bài tập coding được AI hỗ trợ",
        "Số liệu phân tích và báo cáo tỷ lệ chấp nhận",
      ],
    },
    {
      title: "Gói Doanh nghiệp",
      subtitle: "Dành cho toàn bộ tổ chức",
      users: "Từ 21 người trở lên",
      price: "Liên hệ đội ngũ bán hàng để biết giá",
      buttonLabel: "Yêu cầu nhận bản demo",
      features: [
        "Truy cập vào hơn 30.000 khóa học hàng đầu",
        "Luyện thi chứng chỉ",
        "Các đề xuất tập trung vào mục tiêu",
        "Bài tập coding được AI hỗ trợ",
        "Số liệu phân tích và thông tin chi tiết nâng cao",
        "Đội ngũ chăm sóc khách hàng riêng",
        "Tuyển tập khóa học quốc tế gồm 15 ngôn ngữ",
        "Nội dung có thể tùy chỉnh",
        "Đào tạo công nghệ thực hành có tiện ích bổ sung",
        "Dịch vụ triển khai chiến lược có tiện ích bổ sung",
      ],
    },
  ];

  return (
    <div className="max-w-5xl pt-[90px] mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      {plans.map((plan, index) => (
        <div
          key={index}
          className="border rounded-xl shadow-sm p-6 flex flex-col justify-between"
        >
          <div>
            <h2 className="text-xl font-bold text-gray-800">{plan.title}</h2>
            <p className="text-sm text-gray-500 mb-4">{plan.subtitle}</p>
            <div className="flex items-center space-x-2 mb-4 text-gray-600">
              <span>👥</span>
              <span>{plan.users}</span>
            </div>
            <p className="text-lg font-semibold text-gray-800 mb-2">
              {plan.price}
            </p>
            {plan.note && (
              <p className="text-sm text-gray-500 mb-6">{plan.note}</p>
            )}
          </div>
          <div>
            <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition mb-6">
              {plan.buttonLabel} →
            </button>
            <ul className="space-y-2 text-sm text-gray-700">
              {plan.features.map((feature, i) => (
                <li key={i}>✅ {feature}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
export default PricePage;
