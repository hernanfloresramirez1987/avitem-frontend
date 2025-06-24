export const formatDate = (date: Date): string => {
    return `${date.getDate().toString().padStart(2, '0')}
        /${(date.getMonth() + 1).toString().padStart(2, '0')}
        /${date.getFullYear()}`;
};

export const calculateTotal = (data: any[]): number => {
    return data.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0);
};