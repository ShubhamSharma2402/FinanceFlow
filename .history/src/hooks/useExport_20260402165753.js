export default function useExport() {
  const exportJSON = (data, filename = "data.json") => {
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  const exportCSV = (data, filename = "data.csv") => {
    const headers = Object.keys(data[0] || {});
    const rows = data.map((row) =>
      headers.map((h) => JSON.stringify(row[h] ?? "")).join(",")
    );

    const csv = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();

    URL.revokeObjectURL(url);
  };

  return { exportCSV, exportJSON };
}