export const getListCategory = async () => {
    try {
        const response = await fetch("http://localhost:3002/categories"); // Thêm 'await' ở đây
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json(); // Đợi chuyển đổi phản hồi sang JSON
        return result;
    } catch (error) {
        console.error('Có lỗi xảy ra khi lấy danh sách danh mục:', error);
        return [];
    }
}