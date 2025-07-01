
![image](https://github.com/user-attachments/assets/78c36918-b0e0-4725-8919-877106e838f6)
Deployed on Render

# 🌐 Luyện Thi Trắc Nghiệm CNTT – Web App

Đây là phiên bản web của hệ thống luyện thi trắc nghiệm dành cho sinh viên chuyên ngành Công nghệ Thông tin. Người dùng có thể đăng nhập, chọn đề thi, làm bài, và xem kết quả – tất cả đều lưu trữ trên hệ thống server MongoDB.

---

## 📦 Công nghệ sử dụng

- 💻 Backend: Node.js + Express
- 🧠 Cơ sở dữ liệu: MongoDB Atlas
- 📄 Template Engine: EJS
- 📁 Quản lý đề thi: Excel (`.xlsx`) đọc bằng `xlsx`
- 📂 Upload bài làm: Gửi qua HTTP POST & lưu MongoDB
- 🎨 Frontend: HTML, CSS, JS thuần (Bootstrap hỗ trợ UI)

---

## 🔧 Yêu cầu hệ thống

- Node.js >= 16.x
- MongoDB Atlas (hoặc local MongoDB)
- Một editor như VS Code
- Internet (MongoDB Atlas)

---

## 🚀 Hướng dẫn cài đặt & chạy local

# 1. Clone dự án
git clone https://github.com/[your-username]/[repo-name].git
cd project

# 2. Cài đặt các gói phụ thuộc
npm install

# 3. Chạy ứng dụng
npm start


## Quản lý đề thi
Thêm file .xlsx vào thư mục public/subjects

Định dạng mỗi đề:

question: Nội dung câu hỏi

option_1 → option_4: Các lựa chọn

correct: Trả lời đúng (option_1, option_2,...)

| Lỗi                   | Giải pháp                                                |
| --------------------- | -------------------------------------------------------- |
| MongoDB không kết nối | Kiểm tra `MONGODB_URL` trong `.env`                      |
| `xlsx.readFile` lỗi   | Đảm bảo đường dẫn đề thi `.xlsx` đúng                    |
| Web không load đề thi | Kiểm tra query `topic` được truyền vào `/quiz?topic=...` |

