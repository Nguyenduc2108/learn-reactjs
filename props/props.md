# 1.Props là gì?

    . là 1 Object, chứa các thuộc tính
        để mô tả cho thằng React element mà chúng ta tạo ra
    . để dữ liệu động , không bị cứng

## 1.1.React element:

            . sử dụng props giống như với attribute của thẻ HTML
            . 2 props class, for => className, htmlFor
            . phải tuân theo quy ước có sẵn

## 1.2.React components:

            . Sử dụng props giống như đối số cho component
            . Tự do đặt tên props
                . Đặt theo kiểu camelCase
                . *Có thể bao gồm dấu gạch ngang
            . Gọi component === gọi hàm

## 1.3.Chú ý:

            . Prop "key" là prop đặc biệt:
                . chỉ dùng cho mục đích đưa React element, React component nằm vào trong Array
            . Props cơ bản là đối số của Component
              => Props có thể là bất kỳ kiểu dữ liệu nào
            . Sử dụng destructuring để lấy giá trị props
