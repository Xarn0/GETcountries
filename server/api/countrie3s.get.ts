// export default defineEventHandler(async () => {
//   try {
//     const data = await $fetch(
//       "https://restcountries.com/v3.1/independent?status=true"
//     );
//     return data;
//   } catch (error) {
//     throw createError({
//       statusCode: 500,
//       statusMessage: "Failed to fetch countries"
//     });
//   }
// });
