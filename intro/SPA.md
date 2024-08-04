# 1.SPA - Single-Page Application

-   ReactJS là 1 trong những thư viện tạo ra SPA
-   sản phẩm: f8, google,facebook,...

# 2.Cách triển khai

-   SPA - Single-Page Application (ứng dụng 1 trang) -> CSR -> Client side rendering
-   MPA - Multi-Page Application (ứng dụng nhiều trang) -> SSR -> Server side rendering

## 3.Sự khác biệt

### SPA

-   cách tiếp cận hiện đại hơn
-   không yêu cầu tải lại trang trong quá trình sử dụng

### MPA

-   cách tiếp cận cổ điển hơn
-   tải lại trang trong quá trình sử dụng (click link, chuyển trang,...)

## 4.So sánh

### Tốc độ

-   SPA nhanh hơn khi sử dụng
    -   phần lớn tài nguyên được tải trong lần đầu
    -   trang chỉ tải dữ liệu mới khi cần
-   MPA chậm hơn khi sử dụng
    -   luôn tải lại toàn bộ trang khi truy cập và chuyển hướng

### Bóc tách

-   SPA có phần FE riêng biệt
-   MPA FE & BE phụ thuộc nhau nhiều hơn, được đặt trong cùng 1 dự án

### SEO

-   SPA không thân thiện với SEO như MPA
-   Trải nghiệm trên thiết bị di động tốt hơn

### UX

-   SPA có trải nghiệm tốt hơn, nhất là các thao tác chuyển trang
-   Trải nghiệm trên thiết bị di động tốt hơn

### Quá trình phát triển

-   SPA dễ dàng tái sử dụng code (component)
-   SPA bóc tách FE & BE
    -   chia team phát triển song song
    -   phát triển thêm mobile app dễ dàng

### Phụ thuộc vào JS

-   SPA phụ thuộc hoàn toàn vào JS
-   MPA có thể ko cần JS

## 5.Chọn SPA hay MPA

-   cái nào phù hợp thì dùng ( tùy trường hợp)
-   MPA tốn hiệu năng hơn(performance)
