/**
 * @returns {string}
 */
export function StringArrayTemplate (): string {
    return `
        function {stringArrayFunctionName} () {
            const {stringArrayName} = {stringArrayStorageItems}.split("JwdsKweIaE");
            
            {stringArrayFunctionName} = function () {
                return {stringArrayName};
            };
            
            return {stringArrayFunctionName}();
        }
    `;
}
