export const handleFilter = (filters: any[]) => {
    const whereClause: any = [];

    filters.forEach(({columnKey, operator, value}) => {
        const condition: any = {[columnKey]: {}};
        switch (operator) {
            case "eq":
                condition[columnKey].equals = value;
                break;
            case "neq":
                condition[columnKey].not = value;
                break;
            case "gt":
                condition[columnKey].gt = parseFloat(value);
                break;
            case "lt":
                condition[columnKey].lt = parseFloat(value);
                break;
            case "gte":
                condition[columnKey].gte = parseFloat(value);
                break;
            case "lte":
                condition[columnKey].lte = parseFloat(value);
                break;
            case "contains":
                condition[columnKey].contains = value;
                break;
            case "startsWith":
                condition[columnKey].startsWith = value;
                break;
            case "endsWith":
                condition[columnKey].endsWith = value;
                break;
        }
        whereClause.push(condition);
    });
    return whereClause;
}