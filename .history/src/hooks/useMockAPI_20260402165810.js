export default function useMockAPI(delay = 600) {
  const mockFetch = (data) =>
    new Promise((resolve) => setTimeout(() => resolve(data), delay));

  const api = {
    get: async (data) => await mockFetch({ success: true, data }),
    post: async (item) =>
      await mockFetch({ success: true, message: "Created", item }),
    put: async (item) =>
      await mockFetch({ success: true, message: "Updated", item }),
    delete: async (id) =>
      await mockFetch({ success: true, message: "Deleted", id }),
  };

  return api;
}