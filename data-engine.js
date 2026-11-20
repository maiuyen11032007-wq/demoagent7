/**
 * AzurePulse AI · Deep In-Browser Data Analysis & Executive BI Engine
 * Combines Business Context with multi-dimensional statistical profiling,
 * Pareto concentration, dual-metric efficiency, anomaly row extraction,
 * and Executive Decision Matrix generation.
 */

const SAMPLE_DATASETS = {
  retail_sales: {
    id: 'retail_sales',
    name: 'Doanh thu Bán lẻ & TMĐT 2026',
    category: 'Kinh doanh & E-commerce',
    description: '18 dòng giao dịch tổng hợp theo tháng, kênh bán (Shopee, TikTok Shop, Website, Cửa hàng) và khu vực.',
    defaultContext: {
      companyName: 'Công ty TNHH TMĐT BlueRetail',
      industry: 'Thương mại điện tử & Bán lẻ',
      objective: 'Tối ưu doanh thu & biên lợi nhuận',
      question: 'Kênh bán nào đang có hiệu quả lợi nhuận tốt nhất và khu vực/danh mục nào có tỷ lệ hoàn hàng đáng lo ngại?'
    },
    rows: [
      { Thang: '2026-01', Kenh_Ban: 'Shopee', Danh_Muc: 'Điện tử', Khu_Vuc: 'TP.HCM', So_Don: 420, Doanh_Thu: 580000000, Chi_Phi: 410000000, Ty_Le_Hoan: 3.2 },
      { Thang: '2026-01', Kenh_Ban: 'TikTok Shop', Danh_Muc: 'Thời trang', Khu_Vuc: 'Hà Nội', So_Don: 610, Doanh_Thu: 390000000, Chi_Phi: 295000000, Ty_Le_Hoan: 6.8 },
      { Thang: '2026-01', Kenh_Ban: 'Website', Danh_Muc: 'Gia dụng', Khu_Vuc: 'Đà Nẵng', So_Don: 185, Doanh_Thu: 245000000, Chi_Phi: 162000000, Ty_Le_Hoan: 1.9 },
      { Thang: '2026-02', Kenh_Ban: 'Shopee', Danh_Muc: 'Điện tử', Khu_Vuc: 'TP.HCM', So_Don: 455, Doanh_Thu: 625000000, Chi_Phi: 438000000, Ty_Le_Hoan: 3.0 },
      { Thang: '2026-02', Kenh_Ban: 'TikTok Shop', Danh_Muc: 'Mỹ phẩm', Khu_Vuc: 'TP.HCM', So_Don: 740, Doanh_Thu: 470000000, Chi_Phi: 330000000, Ty_Le_Hoan: 5.4 },
      { Thang: '2026-02', Kenh_Ban: 'Cửa hàng', Danh_Muc: 'Gia dụng', Khu_Vuc: 'Hà Nội', So_Don: 210, Doanh_Thu: 315000000, Chi_Phi: 210000000, Ty_Le_Hoan: 0.8 },
      { Thang: '2026-03', Kenh_Ban: 'Shopee', Danh_Muc: 'Mỹ phẩm', Khu_Vuc: 'Hà Nội', So_Don: 530, Doanh_Thu: 495000000, Chi_Phi: 342000000, Ty_Le_Hoan: 4.1 },
      { Thang: '2026-03', Kenh_Ban: 'TikTok Shop', Danh_Muc: 'Thời trang', Khu_Vuc: 'TP.HCM', So_Don: 890, Doanh_Thu: 560000000, Chi_Phi: 425000000, Ty_Le_Hoan: 8.5 },
      { Thang: '2026-03', Kenh_Ban: 'Website', Danh_Muc: 'Điện tử', Khu_Vuc: 'TP.HCM', So_Don: 260, Doanh_Thu: 410000000, Chi_Phi: 270000000, Ty_Le_Hoan: 1.5 },
      { Thang: '2026-04', Kenh_Ban: 'Shopee', Danh_Muc: 'Gia dụng', Khu_Vuc: 'Đà Nẵng', So_Don: 380, Doanh_Thu: 440000000, Chi_Phi: 305000000, Ty_Le_Hoan: 2.7 },
      { Thang: '2026-04', Kenh_Ban: 'TikTok Shop', Danh_Muc: 'Mỹ phẩm', Khu_Vuc: 'Hà Nội', So_Don: 950, Doanh_Thu: 640000000, Chi_Phi: 445000000, Ty_Le_Hoan: 5.1 },
      { Thang: '2026-04', Kenh_Ban: 'Cửa hàng', Danh_Muc: 'Điện tử', Khu_Vuc: 'TP.HCM', So_Don: 295, Doanh_Thu: 520000000, Chi_Phi: 360000000, Ty_Le_Hoan: 0.9 },
      { Thang: '2026-05', Kenh_Ban: 'Shopee', Danh_Muc: 'Điện tử', Khu_Vuc: 'TP.HCM', So_Don: 510, Doanh_Thu: 710000000, Chi_Phi: 485000000, Ty_Le_Hoan: 2.8 },
      { Thang: '2026-05', Kenh_Ban: 'TikTok Shop', Danh_Muc: 'Thời trang', Khu_Vuc: 'Đà Nẵng', So_Don: null, Doanh_Thu: 430000000, Chi_Phi: 328000000, Ty_Le_Hoan: 9.4 },
      { Thang: '2026-05', Kenh_Ban: 'Website', Danh_Muc: 'Mỹ phẩm', Khu_Vuc: 'Hà Nội', So_Don: 315, Doanh_Thu: 365000000, Chi_Phi: 235000000, Ty_Le_Hoan: 1.6 },
      { Thang: '2026-06', Kenh_Ban: 'Shopee', Danh_Muc: 'Thời trang', Khu_Vuc: 'TP.HCM', So_Don: 640, Doanh_Thu: 690000000, Chi_Phi: 470000000, Ty_Le_Hoan: 4.2 },
      { Thang: '2026-06', Kenh_Ban: 'TikTok Shop', Danh_Muc: 'Mỹ phẩm', Khu_Vuc: 'TP.HCM', So_Don: 1120, Doanh_Thu: 820000000, Chi_Phi: 550000000, Ty_Le_Hoan: 4.9 },
      { Thang: '2026-06', Kenh_Ban: 'Cửa hàng', Danh_Muc: 'Gia dụng', Khu_Vuc: '', So_Don: 270, Doanh_Thu: 405000000, Chi_Phi: 265000000, Ty_Le_Hoan: 1.1 }
    ]
  },
  marketing_funnel: {
    id: 'marketing_funnel',
    name: 'Hiệu suất Marketing & Ads Q2',
    category: 'Marketing & Growth',
    description: 'Theo dõi ngân sách, lượt click, lead, đơn hàng chuyển đổi và ROAS trên Facebook, Google, TikTok, Email.',
    defaultContext: {
      companyName: 'AzureGrowth Agency',
      industry: 'Marketing & Truyền thông số',
      objective: 'Tối ưu ROAS & Phân bổ ngân sách quảng cáo',
      question: 'Kênh quảng cáo nào mang lại ROAS cao nhất và nên điều chuyển ngân sách từ kênh nào sang kênh nào trong Q3?'
    },
    rows: [
      { Tuan: 'Tuần 01', Kenh_Ads: 'Facebook Ads', Chien_Dich: 'Retargeting Q2', Ngan_Sach: 35000000, Luot_Click: 14200, Lead: 410, Chuyen_Doi: 86, Doanh_Thu: 129000000 },
      { Tuan: 'Tuần 01', Kenh_Ads: 'Google Search', Chien_Dich: 'Brand & High-Intent', Ngan_Sach: 28000000, Luot_Click: 8900, Lead: 365, Chuyen_Doi: 112, Doanh_Thu: 178000000 },
      { Tuan: 'Tuần 01', Kenh_Ads: 'TikTok Ads', Chien_Dich: 'Viral Video', Ngan_Sach: 24000000, Luot_Click: 22500, Lead: 290, Chuyen_Doi: 44, Doanh_Thu: 62000000 },
      { Tuan: 'Tuần 02', Kenh_Ads: 'Facebook Ads', Chien_Dich: 'Lookalike 2%', Ngan_Sach: 42000000, Luot_Click: 16800, Lead: 475, Chuyen_Doi: 95, Doanh_Thu: 144000000 },
      { Tuan: 'Tuần 02', Kenh_Ads: 'Google Search', Chien_Dich: 'Brand & High-Intent', Ngan_Sach: 30000000, Luot_Click: 9400, Lead: 390, Chuyen_Doi: 125, Doanh_Thu: 196000000 },
      { Tuan: 'Tuần 02', Kenh_Ads: 'Email Automation', Chien_Dich: 'Win-back CRM', Ngan_Sach: 5000000, Luot_Click: 3200, Lead: 195, Chuyen_Doi: 68, Doanh_Thu: 98000000 },
      { Tuan: 'Tuần 03', Kenh_Ads: 'Facebook Ads', Chien_Dich: 'Retargeting Q2', Ngan_Sach: 38000000, Luot_Click: 15100, Lead: 440, Chuyen_Doi: 98, Doanh_Thu: 151000000 },
      { Tuan: 'Tuần 03', Kenh_Ads: 'TikTok Ads', Chien_Dich: 'Livestream Boost', Ngan_Sach: 45000000, Luot_Click: 31200, Lead: 520, Chuyen_Doi: 105, Doanh_Thu: 168000000 },
      { Tuan: 'Tuần 03', Kenh_Ads: 'Google Search', Chien_Dich: 'Competitor KW', Ngan_Sach: 32000000, Luot_Click: 7800, Lead: 280, Chuyen_Doi: 84, Doanh_Thu: 132000000 },
      { Tuan: 'Tuần 04', Kenh_Ads: 'Facebook Ads', Chien_Dich: 'Flash Sale', Ngan_Sach: 50000000, Luot_Click: 21400, Lead: 610, Chuyen_Doi: 148, Doanh_Thu: 235000000 },
      { Tuan: 'Tuần 04', Kenh_Ads: 'Google Search', Chien_Dich: 'Brand & High-Intent', Ngan_Sach: 34000000, Luot_Click: 10600, Lead: 430, Chuyen_Doi: 140, Doanh_Thu: 224000000 },
      { Tuan: 'Tuần 04', Kenh_Ads: 'Email Automation', Chien_Dich: 'VIP Loyalty', Ngan_Sach: 6000000, Luot_Click: 4100, Lead: 250, Chuyen_Doi: 92, Doanh_Thu: 148000000 }
    ]
  },
  hr_kpi: {
    id: 'hr_kpi',
    name: 'KPI & Năng suất Nhân sự 2026',
    category: 'Nhân sự & Vận hành',
    description: 'Dữ liệu đánh giá hiệu suất theo phòng ban, cấp bậc, số dự án hoàn thành, điểm KPI và giờ làm thêm.',
    defaultContext: {
      companyName: 'Tập đoàn Công nghệ NovaTech',
      industry: 'Nhân sự & Vận hành',
      objective: 'Đánh giá hiệu suất phòng ban & cân bằng tải công việc',
      question: 'Phòng ban nào đang có hiệu suất KPI cao nhất và bộ phận nào có nguy cơ quá tải giờ làm thêm (OT)?'
    },
    rows: [
      { Ma_NV: 'NV001', Phong_Ban: 'Kỹ thuật', Cap_Bac: 'Senior', Du_An: 7, Diem_KPI: 94, Gio_OT: 18, Thu_Nhap: 34000000 },
      { Ma_NV: 'NV002', Phong_Ban: 'Kỹ thuật', Cap_Bac: 'Middle', Du_An: 5, Diem_KPI: 86, Gio_OT: 24, Thu_Nhap: 24000000 },
      { Ma_NV: 'NV003', Phong_Ban: 'Kinh doanh', Cap_Bac: 'Senior', Du_An: 9, Diem_KPI: 97, Gio_OT: 12, Thu_Nhap: 38000000 },
      { Ma_NV: 'NV004', Phong_Ban: 'Kinh doanh', Cap_Bac: 'Junior', Du_An: 4, Diem_KPI: 74, Gio_OT: 8, Thu_Nhap: 14500000 },
      { Ma_NV: 'NV005', Phong_Ban: 'Marketing', Cap_Bac: 'Middle', Du_An: 6, Diem_KPI: 88, Gio_OT: 15, Thu_Nhap: 21000000 },
      { Ma_NV: 'NV006', Phong_Ban: 'Marketing', Cap_Bac: 'Senior', Du_An: 8, Diem_KPI: 92, Gio_OT: 10, Thu_Nhap: 31000000 },
      { Ma_NV: 'NV007', Phong_Ban: 'Vận hành', Cap_Bac: 'Middle', Du_An: 5, Diem_KPI: 81, Gio_OT: 32, Thu_Nhap: 18500000 },
      { Ma_NV: 'NV008', Phong_Ban: 'Vận hành', Cap_Bac: 'Junior', Du_An: 3, Diem_KPI: 69, Gio_OT: 29, Thu_Nhap: 13000000 },
      { Ma_NV: 'NV009', Phong_Ban: 'Kỹ thuật', Cap_Bac: 'Lead', Du_An: 10, Diem_KPI: 98, Gio_OT: 14, Thu_Nhap: 46000000 },
      { Ma_NV: 'NV010', Phong_Ban: 'Kinh doanh', Cap_Bac: 'Middle', Du_An: 7, Diem_KPI: 89, Gio_OT: 11, Thu_Nhap: 26500000 }
    ]
  }
};

function formatNumberVN(val, isCurrency = false) {
  if (val === null || val === undefined || Number.isNaN(val)) return '—';
  const num = Number(val);
  if (isCurrency || Math.abs(num) >= 1000000) {
    if (Math.abs(num) >= 1e9) return (num / 1e9).toFixed(2) + ' Tỷ';
    if (Math.abs(num) >= 1e6) return (num / 1e6).toFixed(1) + ' Tr';
  }
  return Number.isInteger(num)
    ? num.toLocaleString('vi-VN')
    : num.toLocaleString('vi-VN', { maximumFractionDigits: 2 });
}

function parseNumeric(val) {
  if (typeof val === 'number') return Number.isFinite(val) ? val : null;
  if (val === null || val === undefined) return null;
  const s = String(val).trim();
  if (!s) return null;
  const cleaned = s.replace(/[₫đ$€%\s]/g, '').replace(/,(?=\d{3}(\D|$))/g, '');
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : null;
}

function parseDelimitedText(text) {
  const lines = text.trim().split(/\r?\n/).filter(l => l.trim().length > 0);
  if (lines.length < 2) throw new Error('Dữ liệu cần ít nhất 1 dòng tiêu đề và 1 dòng dữ liệu.');
  const firstLine = lines[0];
  const delimiter = firstLine.includes('\t') ? '\t' : (firstLine.includes(';') && !firstLine.includes(',') ? ';' : ',');

  const splitRow = (line) => {
    const out = [];
    let cur = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') inQuotes = !inQuotes;
      else if (ch === delimiter && !inQuotes) {
        out.push(cur.trim());
        cur = '';
      } else {
        cur += ch;
      }
    }
    out.push(cur.trim());
    return out;
  };

  const headers = splitRow(lines[0]).map((h, idx) => h || `Cot_${idx + 1}`);
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const cells = splitRow(lines[i]);
    const obj = {};
    headers.forEach((h, idx) => {
      const raw = cells[idx] !== undefined ? cells[idx] : '';
      const num = parseNumeric(raw);
      obj[h] = (raw !== '' && num !== null && !/^0\d+$/.test(raw)) ? num : raw;
    });
    rows.push(obj);
  }
  return rows;
}

async function parseUploadedFile(file) {
  const ext = file.name.split('.').pop().toLowerCase();
  if (ext === 'json') {
    const text = await file.text();
    const parsed = JSON.parse(text);
    const rows = Array.isArray(parsed) ? parsed : (parsed.data || parsed.rows || [parsed]);
    if (!rows.length) throw new Error('File JSON không chứa mảng dữ liệu hợp lệ.');
    return rows;
  }
  if (ext === 'csv' || ext === 'tsv' || ext === 'txt') {
    const text = await file.text();
    return parseDelimitedText(text);
  }
  if (ext === 'xlsx' || ext === 'xls') {
    if (typeof XLSX === 'undefined') {
      throw new Error('Thư viện đọc Excel (SheetJS) chưa sẵn sàng. Vui lòng kiểm tra kết nối mạng.');
    }
    const buf = await file.arrayBuffer();
    const wb = XLSX.read(buf, { type: 'array' });
    const firstSheet = wb.SheetNames[0];
    const rows = XLSX.utils.sheet_to_json(wb.Sheets[firstSheet], { defval: '' });
    if (!rows.length) throw new Error('Sheet đầu tiên trong file Excel không có dữ liệu.');
    return rows;
  }
  throw new Error(`Định dạng .${ext} chưa được hỗ trợ. Hãy dùng .xlsx, .csv, hoặc .json.`);
}

function parseAnalysisRevision(rawRows, revisionNote) {
  const note = (revisionNote || '').trim();
  const result = {
    rows: rawRows.map(r => ({ ...r })),
    primaryMetricName: null,
    groupDimName: null,
    extraMetricNames: [],
    extraMetricNotes: [],
    targetSection: null,
    hideAnomalies: false,
    conciseMode: false,
    focusKeyword: null,
    appliedChanges: []
  };
  if (!note || !rawRows.length) return result;

  const cols = Object.keys(rawRows[0] || {});
  const colAliases = {
    'tỷ lệ hoàn': /ty_le_hoan|hoan|return/i,
    'hoàn hàng': /ty_le_hoan|hoan|return/i,
    'chi phí': /chi_phi|cost|ngan_sach|expense|cogs/i,
    'ngân sách': /ngan_sach|budget|chi_phi/i,
    'số đơn': /so_don|order_count|orders/i,
    'doanh thu': /doanh_thu|revenue|sales|amount|total/i,
    'lợi nhuận': /loi_nhuan|profit|lai_rong|net_income/i,
    'giờ ot': /gio_ot|ot/i,
    'làm thêm': /gio_ot|ot/i,
    'kpi': /diem_kpi|kpi/i,
    'thu nhập': /thu_nhap|luong|salary/i,
    'khu vực': /khu_vuc|region|area/i,
    'thành phố': /city|thanh_pho/i,
    'phân khúc': /segment|phan_khuc/i,
    'danh mục': /danh_muc|category/i,
    'kênh': /kenh|channel/i,
    'phòng ban': /phong_ban|department/i,
    'cấp bậc': /cap_bac|level/i,
    'chiến dịch': /chien_dich|campaign/i
  };

  const noteLower = note.toLowerCase();

  // Detect which of the 5 report sections the user is targeting
  if (/tóm tắt|điều hành/.test(noteLower)) result.targetSection = 'summary';
  else if (/chiều ngang|qua các kỳ|theo kỳ|xu hướng/.test(noteLower)) result.targetSection = 'horizontal';
  else if (/chiều dọc|cơ cấu|tỷ trọng/.test(noteLower)) result.targetSection = 'vertical';
  else if (/chỉ số cốt lõi|nhóm chỉ số|chỉ số/.test(noteLower)) result.targetSection = 'kpi';
  else if (/nguyên nhân|giải pháp|đề xuất|hành động/.test(noteLower)) result.targetSection = 'solutions';

  if (/ngắn gọn|rút gọn|tinh gọn/.test(noteLower)) {
    result.conciseMode = true;
    result.appliedChanges.push('Đã rút gọn nội dung phân tích theo yêu cầu.');
  }
  if (/(?:bỏ|ẩn|không hiện|không cần)\s+(?:phần\s+)?(?:ngoại lai|ô thiếu|lỗi dữ liệu)/.test(noteLower)) {
    result.hideAnomalies = true;
    result.appliedChanges.push('Đã ẩn thông tin điểm ngoại lai khỏi phần nhận định.');
  }

  const clauses = note.split(/[;\n,]+/).map(s => s.trim()).filter(Boolean);

  clauses.forEach(clause => {
    const cLower = clause.toLowerCase();

    // 0. Add metric / KPI directly: "thêm lợi nhuận", "bổ sung chi phí", "hiển thị thêm Doanh_Thu"
    const addMatch = clause.match(/^(?:thêm|bổ sung|kèm|hiển thị thêm|cho thêm|tính thêm)\s+["']?(.+?)["']?$/i);
    if (addMatch) {
      const targetRaw = addMatch[1].trim();
      const targetLower = targetRaw.toLowerCase();
      const activeColsNow = Object.keys(result.rows[0] || {});

      // Check exact column match
      let matchedNumCol = activeColsNow.find(c => c.toLowerCase() === targetLower);
      if (!matchedNumCol) {
        for (const [alias, regex] of Object.entries(colAliases)) {
          if (targetLower.includes(alias)) {
            matchedNumCol = activeColsNow.find(c => regex.test(c));
            if (matchedNumCol) break;
          }
        }
      }

      if (matchedNumCol) {
        if (!result.extraMetricNames.includes(matchedNumCol)) {
          result.extraMetricNames.push(matchedNumCol);
          result.appliedChanges.push(`Đã bổ sung trực tiếp chỉ số "${matchedNumCol}" vào mục Phân tích các nhóm chỉ số cốt lõi.`);
        }
        return;
      }

      // Special handling: "lợi nhuận" / "profit" when no profit column exists -> compute Revenue - Cost if available
      if (/lợi nhuận|profit|lãi/.test(targetLower)) {
        const revCol = activeColsNow.find(c => /doanh_thu|revenue|sales|amount|total/i.test(c));
        const costCol = activeColsNow.find(c => /chi_phi|cost|ngan_sach|expense|cogs/i.test(c));
        if (revCol && costCol) {
          const derivedName = 'Loi_Nhuan';
          result.rows.forEach(r => {
            const rv = parseNumeric(r[revCol]);
            const cv = parseNumeric(r[costCol]);
            r[derivedName] = (rv !== null && cv !== null) ? (rv - cv) : null;
          });
          if (!result.extraMetricNames.includes(derivedName)) {
            result.extraMetricNames.push(derivedName);
            result.appliedChanges.push(`Đã tính & bổ sung trực tiếp chỉ số Lợi nhuận (${derivedName} = ${revCol} - ${costCol}) vào mục Phân tích các nhóm chỉ số cốt lõi.`);
          }
          return;
        } else if (revCol) {
          if (!result.extraMetricNames.includes(revCol)) {
            result.extraMetricNames.push(revCol);
          }
          result.extraMetricNotes.push(`Lợi nhuận ròng chưa thể tự tính do dữ liệu chưa có cột Chi phí; đã bổ sung trực tiếp chỉ số "${revCol}" làm cơ sở quy mô doanh thu trong nhóm chỉ số cốt lõi.`);
          result.appliedChanges.push(`Đã bổ sung "${revCol}" vào mục Chỉ số cốt lõi (dữ liệu chưa có cột Chi phí để trừ ra Lợi nhuận ròng).`);
          return;
        }
      }
    }

    // A. Drop column: "xóa cột X" / "bỏ cột X"
    const dropColMatch = clause.match(/^(?:xóa|bỏ|loại|loại bỏ)\s+cột\s+["']?(.+?)["']?$/i);
    if (dropColMatch) {
      const targetCol = cols.find(c => c.toLowerCase() === dropColMatch[1].trim().toLowerCase());
      if (targetCol) {
        result.rows.forEach(r => delete r[targetCol]);
        result.appliedChanges.push(`Đã xóa cột "${targetCol}" khỏi phân tích.`);
        return;
      }
    }

    // B. Exclude rows by value/keyword: "xóa X", "bỏ X", "loại X", "trừ X"
    const exclMatch = clause.match(/^(?:xóa|bỏ|loại|loại bỏ|trừ|không tính)\s+(?:dòng\s+(?:chứa|có)\s+)?["']?(.+?)["']?$/i);
    if (exclMatch) {
      const kw = exclMatch[1].trim().toLowerCase();
      const before = result.rows.length;
      const filtered = result.rows.filter(r => !Object.values(r).some(v => String(v ?? '').toLowerCase().includes(kw)));
      if (filtered.length > 0 && filtered.length < before) {
        result.rows = filtered;
        result.appliedChanges.push(`Đã loại bỏ ${before - filtered.length} dòng chứa "${exclMatch[1].trim()}" (còn ${filtered.length} dòng).`);
        return;
      }
    }

    // C. Focus / Filter rows by value/keyword: "chỉ X", "tập trung X", "lọc X", "riêng X"
    const focusMatch = clause.match(/^(?:chỉ|chỉ phân tích|chỉ xem|tập trung(?: vào)?|riêng|lọc(?: theo)?)\s+["']?(.+?)["']?$/i);
    if (focusMatch) {
      const kw = focusMatch[1].trim().toLowerCase();
      const matchedCol = cols.find(c => c.toLowerCase() === kw);
      if (!matchedCol) {
        const filtered = result.rows.filter(r => Object.values(r).some(v => String(v ?? '').toLowerCase().includes(kw)));
        if (filtered.length > 0 && filtered.length < result.rows.length) {
          result.rows = filtered;
          result.appliedChanges.push(`Đã lọc tập trung vào "${focusMatch[1].trim()}": ${filtered.length} dòng.`);
          return;
        }
      }
    }

    // Fallback: inline exclude/focus anywhere in sentence
    const isExclude = /(?:xóa|bỏ|loại|loại bỏ|trừ|không tính)\s+/i.test(cLower);
    const isFocus = /(?:chỉ|tập trung|riêng|lọc|xem riêng)\s+/i.test(cLower);
    if (isExclude || isFocus) {
      const allVals = new Set();
      cols.forEach(c => result.rows.forEach(r => {
        const v = String(r[c] ?? '').trim();
        if (v.length >= 2) allVals.add(v);
      }));
      const hitVal = Array.from(allVals).sort((a, b) => b.length - a.length).find(v => cLower.includes(v.toLowerCase()));
      if (hitVal) {
        const before = result.rows.length;
        const nextRows = isExclude
          ? result.rows.filter(r => !Object.values(r).some(v => String(v ?? '').trim().toLowerCase() === hitVal.toLowerCase()))
          : result.rows.filter(r => Object.values(r).some(v => String(v ?? '').trim().toLowerCase() === hitVal.toLowerCase()));
        if (nextRows.length > 0 && nextRows.length < before) {
          result.rows = nextRows;
          result.appliedChanges.push(isExclude
            ? `Đã loại bỏ "${hitVal}": còn ${nextRows.length}/${before} dòng.`
            : `Đã lọc tập trung vào "${hitVal}": ${nextRows.length} dòng.`);
        }
      }
    }
  });

  // 2. Detect explicit axis overrides ONLY when user is not just adding an extra metric or editing a specific text section
  const isAddOnlyIntent = /(?:thêm|bổ sung|hiển thị thêm|kèm)\s+/i.test(noteLower) && !/(?:đổi|chuyển|trục|chỉ số chính|y1|phân nhóm|phân tích theo)\s+/i.test(noteLower);
  const activeCols = Object.keys(result.rows[0] || {});

  if (!isAddOnlyIntent) {
    activeCols.forEach(c => {
      if (noteLower.includes(c.toLowerCase())) {
        const sampleNums = result.rows.map(r => parseNumeric(r[c])).filter(n => n !== null);
        if (sampleNums.length >= result.rows.length * 0.7) {
          result.primaryMetricName = c;
        } else {
          result.groupDimName = c;
        }
      }
    });

    if (!result.primaryMetricName || !result.groupDimName) {
      for (const [alias, regex] of Object.entries(colAliases)) {
        if (noteLower.includes(alias)) {
          const hit = activeCols.find(c => regex.test(c));
          if (hit) {
            const sampleNums = result.rows.map(r => parseNumeric(r[hit])).filter(n => n !== null);
            if (sampleNums.length >= result.rows.length * 0.7 && !result.primaryMetricName) {
              result.primaryMetricName = hit;
            } else if (sampleNums.length < result.rows.length * 0.7 && !result.groupDimName) {
              result.groupDimName = hit;
            }
          }
        }
      }
    }

    if (result.primaryMetricName) {
      result.appliedChanges.push(`Đã chuyển Chỉ số chính (Y1) sang "${result.primaryMetricName}".`);
    }
    if (result.groupDimName) {
      result.appliedChanges.push(`Đã chuyển Trục phân nhóm (X) sang "${result.groupDimName}".`);
    }
  }

  return result;
}

function analyzeDataset(rawRows, datasetName = 'Dataset', businessContext = {}) {
  // First align default axes with Step 1 Business Context (objective + question), then apply any Step 2 human revision
  const ctxQuery = `${businessContext?.objective || ''} ${businessContext?.question || ''}`.trim();
  const ctxHints = ctxQuery ? parseAnalysisRevision(rawRows, ctxQuery) : { primaryMetricName: null, groupDimName: null };
  const revision = parseAnalysisRevision(rawRows, businessContext?.analysisRevisionNote);
  const rows = revision.rows;
  const totalRows = rows.length;
  const colSet = new Set();
  rows.forEach(r => Object.keys(r).forEach(k => colSet.add(k)));
  const columns = Array.from(colSet);

  const seen = new Set();
  let duplicateCount = 0;
  rows.forEach(r => {
    const sig = JSON.stringify(r);
    if (seen.has(sig)) duplicateCount++;
    else seen.add(sig);
  });

  const colProfiles = [];
  const anomalyRecords = [];
  let totalMissingCells = 0;
  let totalOutliers = 0;

  columns.forEach(col => {
    let missing = 0;
    const rawValues = [];
    const numValues = [];

    rows.forEach(r => {
      const v = r[col];
      if (v === null || v === undefined || String(v).trim() === '') {
        missing++;
      } else {
        rawValues.push(v);
        const n = parseNumeric(v);
        if (n !== null && !/^0\d{3,}$/.test(String(v).trim())) {
          numValues.push(n);
        }
      }
    });

    totalMissingCells += missing;
    const nonNull = rawValues.length;
    const isNumeric = nonNull > 0 && (numValues.length / nonNull) >= 0.75;
    const uniqueCount = new Set(rawValues.map(v => String(v).trim())).size;

    const profile = {
      name: col,
      type: isNumeric ? 'number' : 'category',
      missing,
      missingPct: totalRows ? ((missing / totalRows) * 100) : 0,
      uniqueCount,
      outliers: 0,
      sum: null,
      mean: null,
      median: null,
      stdDev: null,
      min: null,
      max: null,
      topCategory: null
    };

    if (isNumeric && numValues.length > 0) {
      const sorted = [...numValues].sort((a, b) => a - b);
      const sum = sorted.reduce((a, b) => a + b, 0);
      const mean = sum / sorted.length;
      const variance = sorted.reduce((acc, v) => acc + Math.pow(v - mean, 2), 0) / sorted.length;
      const stdDev = Math.sqrt(variance);
      const mid = Math.floor(sorted.length / 2);
      const median = sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;

      const q1 = sorted[Math.floor(sorted.length * 0.25)];
      const q3 = sorted[Math.floor(sorted.length * 0.75)];
      const iqr = q3 - q1;
      const lowFence = q1 - 1.5 * iqr;
      const highFence = q3 + 1.5 * iqr;

      let outlierCount = 0;
      rows.forEach((r, idx) => {
        const n = parseNumeric(r[col]);
        if (n !== null && iqr > 0 && (n < lowFence || n > highFence)) {
          outlierCount++;
          anomalyRecords.push({
            rowIndex: idx + 1,
            column: col,
            value: n,
            direction: n > highFence ? 'Cao bất thường' : 'Thấp bất thường',
            contextLabel: Object.values(r).slice(0, 3).join(' · ')
          });
        }
      });

      totalOutliers += outlierCount;
      profile.sum = sum;
      profile.mean = mean;
      profile.median = median;
      profile.stdDev = stdDev;
      profile.min = sorted[0];
      profile.max = sorted[sorted.length - 1];
      profile.outliers = outlierCount;
    } else if (rawValues.length > 0) {
      const freq = {};
      rawValues.forEach(v => {
        const k = String(v).trim();
        freq[k] = (freq[k] || 0) + 1;
      });
      const top = Object.entries(freq).sort((a, b) => b[1] - a[1])[0];
      profile.topCategory = top ? { label: top[0], count: top[1] } : null;
    }

    colProfiles.push(profile);
  });

  const totalCells = totalRows * columns.length;
  const completeness = totalCells ? Math.max(0, 100 - (totalMissingCells / totalCells) * 100) : 100;
  const dupPenalty = totalRows ? (duplicateCount / totalRows) * 20 : 0;
  const healthScore = Math.round(Math.max(40, Math.min(100, completeness - dupPenalty)));

  const numericCols = colProfiles.filter(c => c.type === 'number');
  const categoryCols = colProfiles.filter(c => c.type === 'category');

  const primaryMetric =
    (revision.primaryMetricName && numericCols.find(c => c.name === revision.primaryMetricName)) ||
    (ctxHints.primaryMetricName && numericCols.find(c => c.name === ctxHints.primaryMetricName)) ||
    numericCols.find(c => /doanh_thu|revenue|sales|profit|loi_nhuan|thu_nhap|kpi|score|amount/i.test(c.name)) ||
    numericCols[0] ||
    null;

  const secondaryMetric =
    numericCols.find(c => c !== primaryMetric && /chi_phi|cost|ngan_sach|so_don|lead|chuyen_doi|du_an|gio_ot/i.test(c.name)) ||
    numericCols.find(c => c !== primaryMetric) ||
    null;

  const riskMetric =
    numericCols.find(c => /hoan|return|loi|error|ot|gio_ot|cost|chi_phi/i.test(c.name)) ||
    null;

  const timeDim =
    categoryCols.find(c => /thang|tuan|ngay|date|month|week|time|nam|quy/i.test(c.name)) ||
    categoryCols[0] ||
    null;

  const groupDim =
    (revision.groupDimName && categoryCols.find(c => c.name === revision.groupDimName)) ||
    (ctxHints.groupDimName && categoryCols.find(c => c.name === ctxHints.groupDimName)) ||
    categoryCols.find(c => c !== timeDim && c.uniqueCount <= 15 && c.uniqueCount >= 2) ||
    categoryCols.find(c => c !== timeDim && c.uniqueCount >= 2) ||
    timeDim ||
    null;

  const secondaryDim =
    categoryCols.find(c => c !== timeDim && c !== groupDim && c.uniqueCount <= 15) ||
    null;

  // Multi-dimensional group aggregation (Primary + Secondary + Count + Efficiency)
  const aggregateDimension = (dimName) => {
    if (!dimName || !primaryMetric) return [];
    const map = {};
    rows.forEach(r => {
      const key = String(r[dimName] ?? '').trim() || 'Chưa phân loại';
      if (!map[key]) {
        map[key] = { label: key, count: 0, primarySum: 0, secondarySum: 0, riskSum: 0 };
      }
      map[key].count++;
      map[key].primarySum += parseNumeric(r[primaryMetric.name]) || 0;
      if (secondaryMetric) map[key].secondarySum += parseNumeric(r[secondaryMetric.name]) || 0;
      if (riskMetric) map[key].riskSum += parseNumeric(r[riskMetric.name]) || 0;
    });
    const list = Object.values(map).map(item => {
      const primaryAvg = item.primarySum / item.count;
      const secondaryAvg = secondaryMetric ? item.secondarySum / item.count : 0;
      const netDelta = secondaryMetric ? item.primarySum - item.secondarySum : item.primarySum;
      const marginPct = (secondaryMetric && item.primarySum > 0)
        ? ((item.primarySum - item.secondarySum) / item.primarySum) * 100
        : null;
      return {
        ...item,
        primaryAvg,
        secondaryAvg,
        netDelta,
        marginPct,
        riskAvg: riskMetric ? item.riskSum / item.count : null
      };
    });
    return list.sort((a, b) => b.primarySum - a.primarySum);
  };

  const trendSeries = timeDim && primaryMetric
    ? (() => {
      const map = {};
      rows.forEach(r => {
        const key = String(r[timeDim.name] ?? '').trim() || 'Chưa phân loại';
        if (!map[key]) map[key] = { label: key, primary: 0, secondary: 0 };
        map[key].primary += parseNumeric(r[primaryMetric.name]) || 0;
        if (secondaryMetric) map[key].secondary += parseNumeric(r[secondaryMetric.name]) || 0;
      });
      return Object.values(map);
    })()
    : [];

  const categoryBreakdown = groupDim ? aggregateDimension(groupDim.name) : [];
  const secondaryBreakdown = secondaryDim ? aggregateDimension(secondaryDim.name) : [];

  // Pareto concentration
  const totalPrimary = categoryBreakdown.reduce((s, x) => s + x.primarySum, 0) || 1;
  const topNCount = Math.max(1, Math.ceil(categoryBreakdown.length * 0.3));
  const topNShare = categoryBreakdown.slice(0, topNCount).reduce((s, x) => s + x.primarySum, 0) / totalPrimary * 100;

  // Alerts
  const alerts = [];
  if (totalMissingCells > 0) {
    alerts.push({ level: 'warning', text: `Phát hiện ${totalMissingCells} ô thiếu dữ liệu — nên chạy Làm sạch tự động.` });
  } else {
    alerts.push({ level: 'success', text: '100% ô dữ liệu đầy đủ, không có giá trị trống.' });
  }
  if (duplicateCount > 0) {
    alerts.push({ level: 'warning', text: `Có ${duplicateCount} dòng trùng lặp hoàn toàn.` });
  }
  if (anomalyRecords.length > 0) {
    alerts.push({ level: 'info', text: `Phát hiện ${anomalyRecords.length} điểm ngoại lai (Outliers) cần rà soát.` });
  }

  // Executive Synthesis & Decision Matrix
  const executiveReport = buildExecutiveReport({
    datasetName,
    businessContext,
    totalRows,
    colProfiles,
    primaryMetric,
    secondaryMetric,
    riskMetric,
    timeDim,
    groupDim,
    secondaryDim,
    trendSeries,
    categoryBreakdown,
    secondaryBreakdown,
    topNCount,
    topNShare,
    anomalyRecords,
    totalMissingCells,
    healthScore,
    revision
  });

  return {
    datasetName,
    businessContext,
    rows,
    columns,
    totalRows,
    totalCols: columns.length,
    totalMissingCells,
    duplicateCount,
    totalOutliers,
    anomalyRecords,
    healthScore,
    colProfiles,
    numericCols,
    categoryCols,
    primaryMetric,
    secondaryMetric,
    riskMetric,
    timeDim,
    groupDim,
    secondaryDim,
    trendSeries,
    categoryBreakdown,
    secondaryBreakdown,
    topNShare,
    alerts,
    revisionApplied: revision.appliedChanges,
    insights: executiveReport.insights,
    executiveReport
  };
}

function buildExecutiveReport(ctx) {
  const {
    datasetName, businessContext, totalRows, colProfiles, primaryMetric, secondaryMetric, riskMetric,
    groupDim, secondaryDim, trendSeries, categoryBreakdown, secondaryBreakdown,
    topNCount, topNShare, anomalyRecords, totalMissingCells, healthScore, revision
  } = ctx;

  const company = businessContext?.companyName || 'Doanh nghiệp';
  const industry = businessContext?.industry || 'Đa ngành';
  const objective = businessContext?.objective || 'Tối ưu hiệu suất vận hành';
  const question = businessContext?.question || 'Đánh giá tổng thể hiệu suất và rủi ro.';
  const revisionNote = (businessContext?.analysisRevisionNote || '').trim();
  const overallMargin = (primaryMetric && secondaryMetric && primaryMetric.sum > 0)
    ? ((primaryMetric.sum - secondaryMetric.sum) / primaryMetric.sum) * 100
    : 20;

  // 1. Direct Answer to Manager's Question
  const topGroup = categoryBreakdown[0];
  const bottomGroup = categoryBreakdown[categoryBreakdown.length - 1];
  let growthStr = '';
  if (trendSeries.length >= 2) {
    const first = trendSeries[0].primary;
    const last = trendSeries[trendSeries.length - 1].primary;
    const pct = first !== 0 ? (((last - first) / Math.abs(first)) * 100).toFixed(1) : '0';
    growthStr = `Xu hướng ${primaryMetric?.name} biến động ${Number(pct) >= 0 ? '+' : ''}${pct}% từ "${trendSeries[0].label}" đến "${trendSeries[trendSeries.length - 1].label}".`;
  }

  let efficiencyAnswer = '';
  if (primaryMetric && secondaryMetric && categoryBreakdown.length) {
    const bestMarginItem = [...categoryBreakdown].sort((a, b) => (b.marginPct ?? -999) - (a.marginPct ?? -999))[0];
    efficiencyAnswer = `Xét về hiệu suất giữa ${primaryMetric.name} và ${secondaryMetric.name}, nhóm "${bestMarginItem.label}" đạt biên chênh lệch cao nhất (${bestMarginItem.marginPct?.toFixed(1)}%).`;
  }

  let revisionBullet = '';
  let revisionInsight = null;
  if (revisionNote) {
    const noteLower = revisionNote.toLowerCase();
    const matchedGroup = [...categoryBreakdown, ...secondaryBreakdown].find(g => noteLower.includes(g.label.toLowerCase()));
    const matchedCol = ctx.colProfiles?.find(c => noteLower.includes(c.name.toLowerCase()));

    let focusDetail = '';
    if (matchedGroup) {
      focusDetail = `Nhóm "${matchedGroup.label}" ghi nhận ${matchedGroup.count} bản ghi, tổng ${primaryMetric?.name} đạt ${formatNumberVN(matchedGroup.primarySum, true)}${matchedGroup.marginPct !== null ? ` (Biên hiệu quả: ${matchedGroup.marginPct.toFixed(1)}%)` : ''}${matchedGroup.riskAvg !== null ? `, mức rủi ro TB: ${formatNumberVN(matchedGroup.riskAvg)}` : ''}.`;
    } else if (matchedCol && matchedCol.type === 'number') {
      focusDetail = `Chỉ số "${matchedCol.name}" có tổng ${formatNumberVN(matchedCol.sum, true)}, trung bình ${formatNumberVN(matchedCol.mean, true)} (Min: ${formatNumberVN(matchedCol.min, true)} · Max: ${formatNumberVN(matchedCol.max, true)}).`;
    } else {
      focusDetail = `Đã lồng ghép chỉ đạo trọng tâm của nhà quản trị vào toàn bộ Ma trận Quyết định và kế hoạch hành động.`;
    }

    revisionBullet = `• **Điều chỉnh theo nhận xét kiểm duyệt ("${revisionNote}"):** ${focusDetail}`;
    revisionInsight = {
      priority: 'Cao',
      tag: 'Trọng tâm theo Nhận xét Kiểm duyệt',
      data: `Yêu cầu điều chỉnh: "${revisionNote}". ${focusDetail}`,
      insight: 'Phân tích đã được hiệu chỉnh lại góc nhìn để bám sát mối quan tâm trực tiếp của nhà quản trị.',
      action: matchedGroup
        ? `Lập phương án hành động riêng cho "${matchedGroup.label}" và theo dõi biến động hàng tuần.`
        : `Ưu tiên triển khai các đề xuất liên quan trực tiếp đến chỉ đạo "${revisionNote}".`,
      kpi: 'Đo lường chuyển biến thực tế theo đúng hạng mục vừa hiệu chỉnh trong kỳ tới.',
      owner: 'Ban Điều hành & Data Analyst'
    };
  }

  // Build 5-part structured summary for HITL preview & executive summary
  const totalPrimary = primaryMetric ? primaryMetric.sum : 0;
  const topSharePct = (topGroup && totalPrimary > 0) ? ((topGroup.primarySum / totalPrimary) * 100).toFixed(1) : '0.0';
  const bottomSharePct = (bottomGroup && totalPrimary > 0) ? ((bottomGroup.primarySum / totalPrimary) * 100).toFixed(1) : '0.0';

  let horizontalText = '';
  if (trendSeries.length >= 2 && primaryMetric) {
    const firstP = trendSeries[0];
    const lastP = trendSeries[trendSeries.length - 1];
    const deltaPct = firstP.primary !== 0 ? (((lastP.primary - firstP.primary) / Math.abs(firstP.primary)) * 100).toFixed(1) : '0.0';
    const sortedTrend = [...trendSeries].sort((a, b) => b.primary - a.primary);
    const peakP = sortedTrend[0];
    const troughP = sortedTrend[sortedTrend.length - 1];
    horizontalText = `Qua ${trendSeries.length} kỳ từ "${firstP.label}" (${formatNumberVN(firstP.primary, true)}) đến "${lastP.label}" (${formatNumberVN(lastP.primary, true)}), ${primaryMetric.name} biến động ${Number(deltaPct) >= 0 ? '+' : ''}${deltaPct}%. Kỳ đạt đỉnh là "${peakP.label}" (${formatNumberVN(peakP.primary, true)}) và kỳ thấp nhất là "${troughP.label}" (${formatNumberVN(troughP.primary, true)}).`;
  } else {
    horizontalText = `Bộ dữ liệu hiện có ${trendSeries.length <= 1 ? 'chỉ 1 kỳ hoặc chưa có cột thời gian rõ ràng' : 'chưa đủ chuỗi kỳ liên tiếp'}, nên chưa thể so sánh tăng trưởng qua nhiều kỳ; hệ thống tập trung đối chiếu chéo giữa các nhóm phân khúc.`;
  }

  let verticalText = '';
  if (topGroup && primaryMetric) {
    verticalText = `Theo chiều ${groupDim?.name || 'nhóm'}, "${topGroup.label}" chiếm tỷ trọng cao nhất (${topSharePct}% tổng ${primaryMetric.name}, đạt ${formatNumberVN(topGroup.primarySum, true)}). Top ${topNCount} nhóm dẫn đầu chiếm **${topNShare.toFixed(1)}%** cơ cấu toàn bộ, trong khi nhóm cuối "${bottomGroup?.label || '—'}" chỉ chiếm ${bottomSharePct}% (${formatNumberVN(bottomGroup?.primarySum || 0, true)}).`;
    if (secondaryBreakdown.length >= 2 && secondaryDim) {
      const topSec = secondaryBreakdown[0];
      const secShare = totalPrimary > 0 ? ((topSec.primarySum / totalPrimary) * 100).toFixed(1) : '0.0';
      verticalText += ` Theo ${secondaryDim.name}, "${topSec.label}" đóng góp lớn nhất với ${secShare}% tổng giá trị.`;
    }
  } else {
    verticalText = `Chưa có đủ phân nhóm danh mục để bóc tách cơ cấu tỷ trọng chi tiết.`;
  }

  let coreKpiText = '';
  if (primaryMetric) {
    coreKpiText = `• **${primaryMetric.name} (Chỉ số chính):** Tổng ${formatNumberVN(primaryMetric.sum, true)}, trung bình ${formatNumberVN(primaryMetric.mean, true)}/bản ghi (biên độ ${formatNumberVN(primaryMetric.min, true)} – ${formatNumberVN(primaryMetric.max, true)}).`;
  }
  if (primaryMetric && secondaryMetric) {
    const bestM = [...categoryBreakdown].sort((a, b) => (b.marginPct ?? -999) - (a.marginPct ?? -999))[0];
    const worstM = [...categoryBreakdown].sort((a, b) => (a.marginPct ?? 999) - (b.marginPct ?? 999))[0];
    coreKpiText += `\n• **${secondaryMetric.name} & Biên hiệu quả:** Tổng ${secondaryMetric.name} đạt ${formatNumberVN(secondaryMetric.sum, true)}; biên chênh lệch trung bình đạt **${overallMargin.toFixed(1)}%** (cao nhất tại "${bestM?.label || '—'}": ${bestM?.marginPct?.toFixed(1) || '—'}%, thấp nhất tại "${worstM?.label || '—'}": ${worstM?.marginPct?.toFixed(1) || '—'}%).`;
  }

  // Directly inject any extra metrics requested by human revision (e.g. "thêm lợi nhuận", "thêm chi phí")
  const extraMetrics = (revision?.extraMetricNames || [])
    .filter(name => name !== primaryMetric?.name && name !== secondaryMetric?.name && name !== riskMetric?.name);
  extraMetrics.forEach(mName => {
    const prof = colProfiles?.find(c => c.name === mName && c.type === 'number');
    if (prof) {
      const labelSuffix = /loi_nhuan|profit/i.test(mName) ? ' (Lợi nhuận bổ sung)' : ' (Chỉ số bổ sung)';
      coreKpiText += `\n• **${prof.name}${labelSuffix}:** Tổng ${formatNumberVN(prof.sum, true)}, trung bình ${formatNumberVN(prof.mean, true)}/bản ghi (biên độ ${formatNumberVN(prof.min, true)} – ${formatNumberVN(prof.max, true)}).`;
    }
  });
  (revision?.extraMetricNotes || []).forEach(noteTxt => {
    coreKpiText += `\n• **Lưu ý chỉ số bổ sung:** ${noteTxt}`;
  });

  if (!revision?.hideAnomalies) {
    if (riskMetric) {
      coreKpiText += `\n• **${riskMetric.name} & Sức khỏe dữ liệu:** Trung bình ${formatNumberVN(riskMetric.mean, true)}; Health Score đạt ${healthScore}/100 (${anomalyRecords.length} điểm ngoại lai IQR, ${totalMissingCells} ô thiếu).`;
    } else {
      coreKpiText += `\n• **Độ tin cậy dữ liệu:** Health Score đạt ${healthScore}/100 (${anomalyRecords.length} điểm ngoại lai IQR, ${totalMissingCells} ô thiếu).`;
    }
  }

  let rootCauseAndSolutionText = `• **Nguyên nhân cốt lõi:** Hiệu suất chung bị chi phối mạnh bởi độ tập trung Pareto (${topNShare.toFixed(1)}% ở Top ${topNCount})${secondaryMetric ? ', chênh lệch biên hiệu quả giữa các nhóm' : ''}${!revision?.hideAnomalies && anomalyRecords.length > 0 ? ` và ${anomalyRecords.length} điểm ngoại lai chưa kiểm chứng` : ''}.`;
  rootCauseAndSolutionText += `\n• **Đề xuất giải pháp:** (1) Bảo vệ nhóm lõi "${topGroup?.label || 'dẫn đầu'}" và trích 15–20% ngân sách phát triển nhóm thứ cấp để giảm phụ thuộc dưới 65%; (2) Kiểm toán & chuẩn hóa định mức vận hành theo nhóm hiệu quả nhất${!revision?.hideAnomalies && (anomalyRecords.length > 0 || totalMissingCells > 0) ? '; (3) Rà soát chứng từ các dòng ngoại lai và khóa trường nhập liệu bắt buộc' : ''}.`;

  const directSummaryLine = `Dựa trên bối cảnh của **${company}** (${industry}) với mục tiêu **${objective}**, phân tích ${totalRows} bản ghi từ "${datasetName}" (Health Score: ${healthScore}/100) cho thấy ${topGroup ? `"${topGroup.label}" đang là đầu tàu dẫn dắt với ${formatNumberVN(topGroup.primarySum, true)}` : 'dữ liệu đã sẵn sàng cho đánh giá quản trị'}${growthStr ? `, đồng thời ${growthStr.charAt(0).toLowerCase() + growthStr.slice(1)}` : '.'}`;

  const directAnswer = [
    `**1. Tóm tắt điều hành**`,
    directSummaryLine,
    `**2. Phân tích theo chiều ngang (so sánh qua các kỳ)**`,
    horizontalText,
    `**3. Phân tích theo chiều dọc (cơ cấu)**`,
    verticalText,
    `**4. Phân tích các nhóm chỉ số cốt lõi**`,
    coreKpiText,
    `**5. Nguyên nhân & đề xuất giải pháp**`,
    rootCauseAndSolutionText,
    (!revision?.appliedChanges?.length && revisionBullet) ? revisionBullet : ''
  ].filter(Boolean).join('\n');

  // 2. Decision Matrix (Scale / Optimize / Mitigate)
  const decisionMatrix = {
    scale: [],
    optimize: [],
    mitigate: []
  };

  if (categoryBreakdown.length >= 2) {
    const top2 = categoryBreakdown.slice(0, 2);
    top2.forEach(item => {
      decisionMatrix.scale.push({
        entity: `${groupDim?.name}: ${item.label}`,
        metric: `${formatNumberVN(item.primarySum, true)} (${item.count} bản ghi)`,
        reason: item.marginPct !== null
          ? `Quy mô lớn và giữ biên hiệu quả ${item.marginPct.toFixed(1)}% (TB toàn bộ: ${overallMargin.toFixed(1)}%).`
          : `Đóng góp tỷ trọng cao nhất trong tập dữ liệu.`
      });
    });

    const midOrLagging = categoryBreakdown.slice(2);
    midOrLagging.forEach(item => {
      if (item.marginPct !== null && item.marginPct < overallMargin) {
        decisionMatrix.mitigate.push({
          entity: `${groupDim?.name}: ${item.label}`,
          metric: `Biên ${item.marginPct.toFixed(1)}% (< TB ${overallMargin.toFixed(1)}%)`,
          reason: `Chi phí/nguồn lực (${secondaryMetric?.name}) đang cao hơn mức trung bình so với đầu ra (${primaryMetric?.name}).`
        });
      } else {
        decisionMatrix.optimize.push({
          entity: `${groupDim?.name}: ${item.label}`,
          metric: `${formatNumberVN(item.primarySum, true)}`,
          reason: `Có tiềm năng tăng trưởng nhưng quy mô còn thấp hơn nhóm dẫn đầu.`
        });
      }
    });
  }

  if (riskMetric && categoryBreakdown.length) {
    const highRisk = [...categoryBreakdown].sort((a, b) => (b.riskAvg || 0) - (a.riskAvg || 0))[0];
    if (highRisk && highRisk.riskAvg > 0) {
      decisionMatrix.mitigate.push({
        entity: `Rủi ro ${riskMetric.name} tại "${highRisk.label}"`,
        metric: `Trung bình ${formatNumberVN(highRisk.riskAvg)}`,
        reason: `Mức ${riskMetric.name} cao nhất trong các nhóm, ảnh hưởng trực tiếp đến mục tiêu ${objective}.`
      });
    }
  }

  // 3. Structured Insights (DATA -> INSIGHT -> ACTION -> KPI)
  const insights = [];
  if (revisionInsight) insights.push(revisionInsight);
  if (topGroup && primaryMetric) {
    insights.push({
      priority: 'Cao',
      tag: 'Phân tích Tập trung (Pareto) & Đa dạng hóa Nguồn thu',
      timeline: 'Tuần 1–2 (Ngắn hạn) & Quý tới (Trung hạn)',
      data: `Top ${topNCount} ${groupDim?.name} ("${topGroup.label}"...) hiện đang chiếm tới ${topNShare.toFixed(1)}% tổng ${primaryMetric.name} toàn hệ thống (riêng "${topGroup.label}" đạt ${formatNumberVN(topGroup.primarySum, true)}). Trong khi đó, nhóm cuối là "${bottomGroup?.label || 'nhóm thứ cấp'}" chỉ đóng góp một phần rất nhỏ, tạo ra độ lệch phân bổ đáng kể.`,
      rationale: `Doanh nghiệp (${company}) đang ở trạng thái phụ thuộc cao vào một số ít ${groupDim?.name} dẫn đầu. Về mặt quản trị rủi ro kinh doanh, nếu nhóm dẫn đầu gặp biến động về nhu cầu thị trường, gián đoạn nguồn cung hoặc áp lực cạnh tranh về giá, kết quả chung của toàn hệ thống sẽ chịu tác động trực tiếp và khó bù đắp kịp thời trong ngắn hạn.`,
      insight: `Doanh nghiệp đang phụ thuộc lớn vào nhóm dẫn đầu. Nếu nhóm này biến động, kết quả chung của ${company} sẽ bị ảnh hưởng mạnh.`,
      action: `1) Ngắn hạn (Tuần 1–2): Rà soát chính sách giữ chân & đảm bảo tồn kho/nguồn lực ưu tiên cho "${topGroup.label}". 2) Trung hạn (Tháng 1–3): Trích 15–20% ngân sách tăng trưởng để thử nghiệm mở rộng tệp khách hàng ở "${bottomGroup?.label || 'nhóm thứ cấp'}". 3) Kỳ vọng: Giảm rủi ro phụ thuộc đơn kênh và tăng trưởng ròng +10–15%.`,
      steps: [
        `Giai đoạn 1 — Bảo vệ vùng lõi (Tuần 1–2): Rà soát toàn bộ chính sách chăm sóc khách hàng, tồn kho an toàn, SLA giao nhận và chất lượng dịch vụ tại nhóm dẫn đầu "${topGroup.label}" nhằm đảm bảo không sụt giảm sản lượng trong thời gian tái cơ cấu.`,
        `Giai đoạn 2 — Kích hoạt nhóm tiềm năng (Tháng 1–2): Phân bổ 15–20% ngân sách tăng trưởng/marketing để triển khai các gói thử nghiệm (bundle, ưu đãi dùng thử, hoặc mở rộng điểm chạm) riêng cho nhóm "${bottomGroup?.label || 'thứ cấp'}" và các nhóm tầm trung.`,
        `Giai đoạn 3 — Theo dõi & Tái cân bằng (Tháng 3 – Quý tới): Thiết lập báo cáo theo dõi tỷ trọng đóng góp theo tuần; nếu nhóm thử nghiệm đạt ngưỡng chuyển đổi kỳ vọng, tiếp tục nhân rộng quy mô để giảm dần sự phụ thuộc vào Top ${topNCount}.`,
        `Tác động kỳ vọng: Giảm tỷ trọng tập trung của Top ${topNCount} xuống dưới 65%, đồng thời tạo thêm động lực tăng trưởng ròng từ 10% đến 15% cho tổng ${primaryMetric.name}.`
      ],
      resources: 'Ngân sách marketing tái phân bổ (15–20%), báo cáo theo dõi phân khúc hàng tuần, phối hợp giữa Kinh doanh – Chuỗi cung ứng.',
      kpi: `Hiện tại: Top ${topNCount} chiếm ${topNShare.toFixed(1)}% tổng ${primaryMetric.name} → Mục tiêu: Giảm tỷ trọng Top ${topNCount} xuống < 65% và tăng đóng góp của các nhóm phụ thêm tối thiểu +20% trong quý tới.`,
      owner: 'Ban Giám đốc & Bộ phận Kinh doanh'
    });
  }

  if (primaryMetric && secondaryMetric) {
    const bestGroup = [...categoryBreakdown].sort((a, b) => (b.marginPct ?? -999) - (a.marginPct ?? -999))[0];
    const worstGroup = [...categoryBreakdown].sort((a, b) => (a.marginPct ?? 999) - (b.marginPct ?? 999))[0];
    const spread = bestGroup && worstGroup ? ((bestGroup.marginPct || 0) - (worstGroup.marginPct || 0)).toFixed(1) : '0';
    insights.push({
      priority: 'Cao',
      tag: 'Hiệu suất Kép & Tối ưu Biên hiệu quả Vận hành',
      timeline: 'Ngay trong Tháng 1 & Chuẩn hóa từ Tháng 2',
      data: `Tổng ${primaryMetric.name} toàn bộ dữ liệu đạt ${formatNumberVN(primaryMetric.sum, true)} so với ${secondaryMetric.name} là ${formatNumberVN(secondaryMetric.sum, true)} (Biên hiệu quả trung bình đạt ${overallMargin.toFixed(1)}%). Tuy nhiên, mức chênh lệch giữa nhóm hiệu quả nhất ("${bestGroup?.label || '—'}": ${bestGroup?.marginPct?.toFixed(1) || '—'}%) và nhóm thấp nhất ("${worstGroup?.label || '—'}": ${worstGroup?.marginPct?.toFixed(1) || '—'}%) lên tới ${spread} điểm %.`,
      rationale: `Khoảng cách hiệu suất ${spread} điểm % cho thấy quy trình vận hành, cấu trúc ${secondaryMetric.name} hoặc chính sách giá/chiết khấu giữa các nhóm chưa đồng đều. Việc chỉ tập trung tăng trưởng quy mô ${primaryMetric.name} mà không kiểm soát ${secondaryMetric.name} tại nhóm biên thấp sẽ làm bào mòn hiệu quả chung của ${company}.`,
      insight: bestGroup && worstGroup
        ? `Nhóm "${bestGroup.label}" đạt biên cao nhất (${bestGroup.marginPct?.toFixed(1)}%), trong khi "${worstGroup.label}" chỉ đạt ${worstGroup.marginPct?.toFixed(1)}% (chênh lệch ${spread} điểm %).`
        : `Chênh lệch giữa đầu ra và chi phí đạt ${overallMargin.toFixed(1)}%.`,
      action: worstGroup
        ? `1) Tuần 1: Kiểm toán chi tiết các khoản ${secondaryMetric.name} tại "${worstGroup.label}" để cắt giảm chi phí kém hiệu quả. 2) Tuần 2–4: Chuẩn hóa quy trình vận hành & định mức chi phí theo mô hình của "${bestGroup?.label}". 3) Kỳ vọng: Cải thiện biên lợi nhuận ròng toàn công ty thêm +3–5 điểm %.`
        : `Theo dõi sát tỷ lệ giữa ${primaryMetric.name} và ${secondaryMetric.name} theo từng tuần.`,
      steps: [
        `Giai đoạn 1 — Kiểm toán chi phí/đầu vào (Tuần 1): Bóc tách chi tiết từng cấu phần ${secondaryMetric.name} tại nhóm "${worstGroup?.label || 'biên thấp'}", xác định các khoản phát sinh bất thường hoặc kém hiệu quả để cắt giảm ngay 10–15% lãng phí.`,
        `Giai đoạn 2 — Chuẩn hóa theo mô hình chuẩn (Tuần 2–3): Đối chiếu quy trình vận hành, tỷ lệ phân bổ nguồn lực và định mức của nhóm dẫn đầu "${bestGroup?.label || 'hiệu quả cao'}" để xây dựng bộ định mức chuẩn (SOP) áp dụng cho các nhóm còn lại.`,
        `Giai đoạn 3 — Thiết lập ngưỡng cảnh báo (Tuần 4 – Tháng 2): Áp dụng cơ chế cảnh báo sớm trên dashboard mỗi khi tỷ lệ ${secondaryMetric.name}/${primaryMetric.name} của bất kỳ nhóm nào vượt ngưỡng cho phép.`,
        `Tác động kỳ vọng: Nâng biên hiệu quả trung bình toàn hệ thống từ ${overallMargin.toFixed(1)}% lên mức ${(overallMargin + 4).toFixed(1)}% (cải thiện tối thiểu +3–5 điểm %).`
      ],
      resources: 'Dữ liệu hạch toán chi tiết theo nhóm, bộ phận Kiểm soát nội bộ / Tài chính, trưởng nhóm vận hành các khu vực.',
      kpi: `Hiện tại: Biên TB ${overallMargin.toFixed(1)}% (nhóm thấp nhất đạt ${worstGroup?.marginPct?.toFixed(1) || '—'}%) → Mục tiêu: Đưa toàn bộ các nhóm đạt tối thiểu >= ${overallMargin.toFixed(1)}% và nâng biên chung lên ${(overallMargin + 4).toFixed(1)}%.`,
      owner: 'Bộ phận Tài chính & Vận hành'
    });
  }

  if (secondaryBreakdown.length >= 2) {
    const topSec = secondaryBreakdown[0];
    const lowSec = secondaryBreakdown[secondaryBreakdown.length - 1];
    const gapSec = (topSec.primarySum / (lowSec.primarySum || 1)).toFixed(1);
    insights.push({
      priority: 'Trung bình',
      tag: `Tối ưu Phân bổ Nguồn lực theo ${secondaryDim?.name}`,
      timeline: 'Tháng 1–2 (Đánh giá & Thử nghiệm điều chỉnh)',
      data: `Phân tích theo chiều ${secondaryDim?.name} ghi nhận nhóm dẫn đầu "${topSec.label}" đạt ${formatNumberVN(topSec.primarySum, true)}, gấp ${gapSec} lần so với nhóm đứng cuối "${lowSec.label}" (${formatNumberVN(lowSec.primarySum, true)}).`,
      rationale: `Sự chênh lệch ${gapSec}x phản ánh hai khả năng song hành: hoặc thị hiếu/khả năng tiếp cận khách hàng đang dịch chuyển mạnh về "${topSec.label}", hoặc nhóm "${lowSec.label}" đang gặp rào cản về định vị giá, trưng bày, hoặc thiếu hụt đầu tư truyền thông phù hợp.`,
      insight: `Sự chênh lệch ${gapSec}x giữa các ${secondaryDim?.name} cho thấy cơ hội lớn để tái cơ cấu danh mục/khu vực.`,
      action: `1) Tuần 1–2: Phân tích nguyên nhân doanh số thấp tại "${lowSec.label}" (giá bán, nhu cầu hay kênh phân phối). 2) Tháng 2: Thử nghiệm gói sản phẩm/khuyến mãi riêng hoặc chuyển dịch tồn kho sang "${topSec.label}".`,
      steps: [
        `Giai đoạn 1 — Khảo sát nguyên nhân gốc rễ (Tuần 1–2): Đánh giá lại mức độ phù hợp của sản phẩm/dịch vụ, phản hồi khách hàng và tỷ lệ chuyển đổi tại "${lowSec.label}" để phân biệt giữa nhóm "tiềm năng chưa khai thác" và nhóm "thoái trào".`,
        `Giai đoạn 2 — Tái phân bổ danh mục & chính sách bán (Tuần 3–6): Nếu "${lowSec.label}" còn dư địa tăng trưởng, thiết kế gói combo/chính sách kích cầu riêng; nếu hiệu suất vẫn thấp sau 4 tuần thử nghiệm, chủ động luân chuyển ngân sách và tồn kho sang "${topSec.label}".`,
        `Giai đoạn 3 — Đánh giá hiệu quả điều chuyển (Cuối Tháng 2): Đo lường lại tốc độ tăng trưởng của cả hai đầu nhóm để chốt phương án phân bổ cho quý tiếp theo.`,
        `Tác động kỳ vọng: Thu hẹp khoảng cách hiệu suất giữa nhóm cao nhất và thấp nhất theo ${secondaryDim?.name} từ ${gapSec}x xuống dưới 2.5x hoặc tối ưu hóa tỷ suất sinh lời trên từng đơn vị nguồn lực.`
      ],
      resources: 'Báo cáo bán hàng theo kênh/danh mục, đội ngũ Trade Marketing & Quản lý ngành hàng.',
      kpi: `Hiện tại: Chênh lệch ${gapSec}x giữa "${topSec.label}" và "${lowSec.label}" → Mục tiêu: Thu hẹp xuống < 2.5x hoặc tăng hiệu suất "${lowSec.label}" tối thiểu +25% trong quý tới.`,
      owner: 'Quản lý Danh mục / Kênh bán & Khu vực'
    });
  }

  if (totalMissingCells > 0 || anomalyRecords.length > 0) {
    insights.push({
      priority: 'Cao',
      tag: 'Kiểm soát Rủi ro & Chuẩn hóa Quản trị Dữ liệu',
      timeline: 'Ngay lập tức (Tuần 1) & Duy trì hàng tuần',
      data: `Chỉ số Sức khỏe Dữ liệu (Health Score) hiện đạt ${healthScore}/100, với ${totalMissingCells} ô dữ liệu bị bỏ trống và ${anomalyRecords.length} bản ghi có giá trị ngoại lai vượt ngưỡng thống kê IQR.`,
      rationale: `Dữ liệu đầu vào thiếu hụt hoặc chứa điểm ngoại lai chưa được xác minh sẽ làm sai lệch các chỉ số trung bình, ảnh hưởng trực tiếp tới độ chính xác của công tác dự báo nhu cầu và phân bổ ngân sách của ${company}.`,
      insight: 'Các điểm ngoại lai hoặc ô trống có thể là lỗi nhập liệu hoặc sự kiện đột biến cần kiểm chứng trước khi chốt quyết định ngân sách.',
      action: `1) Ngày 1–2: Đối chiếu chứng từ gốc cho ${anomalyRecords.length} giao dịch ngoại lai trong Mục Kiểm soát Rủi ro. 2) Tuần 1: Ban hành biểu mẫu nhập liệu chuẩn (khóa trường bắt buộc) để không phát sinh ô trống.`,
      steps: [
        `Giai đoạn 1 — Rà soát chứng từ ngoại lai (Ngày 1–2): Trích xuất danh sách ${anomalyRecords.length} bản ghi ngoại lai IQR, đối chiếu trực tiếp với hóa đơn/chứng từ gốc để phân loại rõ đâu là lỗi nhập liệu (cần hiệu chỉnh ngay) và đâu là giao dịch đột biến hợp lệ (cần ghi chú bối cảnh).`,
        `Giai đoạn 2 — Chuẩn hóa quy trình nhập liệu (Ngày 3–7): Khóa các trường dữ liệu bắt buộc trên hệ thống/file mẫu, thiết lập quy tắc kiểm tra định dạng (validation) nhằm triệt tiêu tình trạng phát sinh ${totalMissingCells} ô trống như hiện tại.`,
        `Giai đoạn 3 — Kiểm tra định kỳ (Hàng tuần): Phân công đầu mối rà soát chất lượng dữ liệu trước mỗi kỳ tổng hợp báo cáo tuần/tháng để duy trì độ tin cậy tuyệt đối cho ban lãnh đạo.`,
        `Tác động kỳ vọng: Nâng chỉ số Health Score từ ${healthScore}/100 lên tối thiểu 98/100, đảm bảo dữ liệu đầu vào sạch và nhất quán.`
      ],
      resources: 'File chứng từ gốc, bộ phận Vận hành – Kế toán – Quản trị dữ liệu.',
      kpi: `Hiện tại: Health Score ${healthScore}/100 (${totalMissingCells} ô thiếu, ${anomalyRecords.length} ngoại lai) → Mục tiêu: >= 98/100 và 0 lỗi nhập liệu chưa xác minh.`,
      owner: 'Bộ phận Vận hành & Quản trị Dữ liệu (Data/Admin)'
    });
  }

  // 4. Deep-Dive Analysis of the 4 Dashboard Charts + Recommendations (Thorough Executive Detail)
  const dashboardDeepDive = [];
  if (trendSeries.length >= 2 && primaryMetric) {
    const sortedPeriods = [...trendSeries].sort((a, b) => b.primary - a.primary);
    const peak = sortedPeriods[0];
    const trough = sortedPeriods[sortedPeriods.length - 1];
    const first = trendSeries[0].primary;
    const last = trendSeries[trendSeries.length - 1].primary;
    const deltaPct = first !== 0 ? (((last - first) / Math.abs(first)) * 100).toFixed(1) : '0';
    const avgPeriod = trendSeries.reduce((s, p) => s + p.primary, 0) / trendSeries.length;
    const volatilityPct = avgPeriod > 0 ? (((peak.primary - trough.primary) / avgPeriod) * 100).toFixed(0) : '0';
    const skewNote = primaryMetric.mean > primaryMetric.median * 1.15
      ? `Giá trị trung bình (${formatNumberVN(primaryMetric.mean, true)}) cao hơn đáng kể so với trung vị (${formatNumberVN(primaryMetric.median, true)}), cho thấy có một số giao dịch/kỳ đột biến kéo mức bình quân lên.`
      : `Trung bình (${formatNumberVN(primaryMetric.mean, true)}) và trung vị (${formatNumberVN(primaryMetric.median, true)}) bám sát nhau, phản ánh phân bố dữ liệu đồng đều.`;

    dashboardDeepDive.push({
      chart: '1. Biểu đồ Xu hướng (Trend Analysis)',
      metricBadge: `Biến động ${Number(deltaPct) >= 0 ? '+' : ''}${deltaPct}% · Biên độ ${volatilityPct}%`,
      finding: `Xuyên suốt ${trendSeries.length} mốc thời gian/chuỗi, chỉ tiêu ${primaryMetric.name} ghi nhận mức biến động ròng ${Number(deltaPct) >= 0 ? '+' : ''}${deltaPct}% (từ ${formatNumberVN(first, true)} ở "${trendSeries[0].label}" đến ${formatNumberVN(last, true)} ở "${trendSeries[trendSeries.length - 1].label}"). Điểm đỉnh đạt ${formatNumberVN(peak.primary, true)} tại "${peak.label}" và điểm đáy là ${formatNumberVN(trough.primary, true)} tại "${trough.label}", bình quân mỗi kỳ đạt ${formatNumberVN(avgPeriod, true)}. ${skewNote}`,
      impact: Number(volatilityPct) > 50
        ? `Biên độ dao động đỉnh–đáy lên tới ${volatilityPct}% cho thấy hoạt động kinh doanh chịu ảnh hưởng mạnh bởi tính mùa vụ, các đợt khuyến mãi tập trung hoặc thiếu tính ổn định giữa các kỳ. Nếu không kiểm soát dòng tiền và tồn kho theo chu kỳ, doanh nghiệp dễ rơi vào tình trạng quá tải ở kỳ đỉnh và dư thừa nguồn lực ở kỳ đáy.`
        : `Nhịp độ biến động qua các kỳ giữ ở mức ổn định (${volatilityPct}%), đây là nền tảng thuận lợi để Ban Giám đốc thiết lập hạn mức ngân sách và dự báo doanh số chính xác cho chu kỳ tới.`,
      recommendation: Number(deltaPct) >= 0
        ? `Ngắn hạn (1–2 tuần): Kiểm tra các yếu tố thúc đẩy tăng trưởng tại kỳ đỉnh "${peak.label}" (chiến dịch, giá bán, tồn kho) để chuẩn hóa thành quy trình lặp lại. Trung hạn (1–3 tháng): Xây dựng kế hoạch dự phòng nguồn lực trước các kỳ thấp điểm tương tự "${trough.label}".`
        : `Ngắn hạn (1–2 tuần): Rà soát ngay nguyên nhân suy giảm từ kỳ "${peak.label}" xuống "${trough.label}" (tỷ lệ chuyển đổi, chi phí quảng cáo, phản hồi khách hàng). Trung hạn: Thiết kế gói kích cầu hoặc tái cơ cấu danh mục sản phẩm cho các kỳ chững lại.`
    });
  }

  if (categoryBreakdown.length >= 2 && primaryMetric) {
    const totalP = categoryBreakdown.reduce((s, g) => s + g.primarySum, 0) || 1;
    const topShare = ((topGroup.primarySum / totalP) * 100).toFixed(1);
    const botShare = ((bottomGroup.primarySum / totalP) * 100).toFixed(1);
    const gapRatio = (topGroup.primarySum / (bottomGroup.primarySum || 1)).toFixed(1);
    dashboardDeepDive.push({
      chart: '2. Biểu đồ Tỷ trọng Pareto & Xếp hạng',
      metricBadge: `Top ${topNCount} chiếm ${topNShare.toFixed(1)}% · Chênh lệch ${gapRatio}x`,
      finding: `Phân tích cơ cấu theo ${groupDim?.name} cho thấy sự phân hóa rõ rệt: "${topGroup.label}" đóng góp ${formatNumberVN(topGroup.primarySum, true)} (chiếm ${topShare}% tổng ${primaryMetric.name}, bình quân ${formatNumberVN(topGroup.primaryAvg, true)}/giao dịch), cao gấp ${gapRatio} lần nhóm đứng cuối "${bottomGroup.label}" (${formatNumberVN(bottomGroup.primarySum, true)}, chiếm ${botShare}%). Nhóm Top ${topNCount} đang nắm giữ ${topNShare.toFixed(1)}% toàn bộ kết quả.`,
      impact: topNShare > 70
        ? `Rủi ro tập trung (Concentration Risk) đang ở mức cao (>70%). Sự phụ thuộc quá lớn vào "${topGroup.label}" khiến kết quả chung của ${company} dễ bị tổn thương nếu kênh/nhóm này gặp biến động về chính sách, chi phí hoặc cạnh tranh.`
        : `Cơ cấu phân bổ giữa các ${groupDim?.name} tương đối hài hòa (${topNShare.toFixed(1)}%), giúp doanh nghiệp phân tán rủi ro tốt và có nhiều động lực tăng trưởng song song.`,
      recommendation: topNShare > 70
        ? `Ngắn hạn: Duy trì bảo vệ thị phần và trải nghiệm khách hàng tại "${topGroup.label}". Trung hạn: Trích 15–20% ngân sách tăng trưởng để thử nghiệm và nâng tỷ trọng các nhóm thứ cấp nhằm đưa độ tập trung về vùng an toàn (<65%).`
        : `Ngắn hạn: Tiếp tục đẩy mạnh quy mô ở "${topGroup.label}" nơi đã chứng minh hiệu quả. Trung hạn: Đánh giá nguyên nhân hiệu suất thấp ở "${bottomGroup.label}" để quyết định cải thiện hay cắt giảm.`
    });
  }

  if (primaryMetric && secondaryMetric && categoryBreakdown.length) {
    const bestEff = [...categoryBreakdown].sort((a, b) => (b.marginPct ?? -999) - (a.marginPct ?? -999))[0];
    const lowEff = [...categoryBreakdown].sort((a, b) => (a.marginPct ?? 999) - (b.marginPct ?? 999))[0];
    const spread = ((bestEff.marginPct || 0) - (lowEff.marginPct || 0)).toFixed(1);
    dashboardDeepDive.push({
      chart: '3. Biểu đồ Đối chiếu Hiệu suất Kép (Y1 vs Y2)',
      metricBadge: `Biên TB: ${overallMargin.toFixed(1)}% · Chênh lệch ${spread} điểm %`,
      finding: `Đối chiếu trực tiếp giữa ${primaryMetric.name} (tổng ${formatNumberVN(primaryMetric.sum, true)}) và ${secondaryMetric.name} (tổng ${formatNumberVN(secondaryMetric.sum, true)}) cho thấy biên hiệu quả trung bình toàn doanh nghiệp đạt ${overallMargin.toFixed(1)}%. Trong đó, "${bestEff.label}" đạt biên tốt nhất (${bestEff.marginPct?.toFixed(1)}%, lãi/chênh lệch ${formatNumberVN(bestEff.netDelta, true)}), còn "${lowEff.label}" thấp nhất (${lowEff.marginPct?.toFixed(1)}%, chênh lệch ${formatNumberVN(lowEff.netDelta, true)}).`,
      impact: `Khoảng cách hiệu quả lên tới ${spread} điểm % giữa nhóm tốt nhất và kém nhất chứng tỏ chi phí/nguồn lực đang bị tiêu hao không đồng đều. Nếu dịch chuyển hoặc tối ưu được nhóm biên thấp tiệm cận mức trung bình ${overallMargin.toFixed(1)}%, lợi nhuận ròng chung sẽ cải thiện rõ rệt mà không cần tăng thêm ngân sách.`,
      recommendation: `Ngắn hạn: Kiểm toán ngay cấu trúc ${secondaryMetric.name} tại "${lowEff.label}" để cắt các khoản chi không tạo chuyển đổi. Trung hạn: Áp dụng mô hình vận hành và định mức chi phí của "${bestEff.label}" làm chuẩn (benchmark) cho toàn hệ thống.`
    });
  }

  if (riskMetric || anomalyRecords.length > 0) {
    dashboardDeepDive.push({
      chart: '4. Phân tích Rủi ro & Ngoại lai trên Dashboard',
      metricBadge: `${anomalyRecords.length} điểm ngoại lai IQR${riskMetric ? ` · TB ${riskMetric.name}: ${formatNumberVN(riskMetric.mean)}` : ''}`,
      finding: `Hệ thống kiểm định thống kê Tukey IQR phát hiện ${anomalyRecords.length} điểm dữ liệu ngoại lai nằm ngoài ngưỡng bình thường${riskMetric ? `, đồng thời chỉ số rủi ro ${riskMetric.name} dao động từ ${formatNumberVN(riskMetric.min)} đến ${formatNumberVN(riskMetric.max)} (trung bình ${formatNumberVN(riskMetric.mean)})` : ''}.`,
      impact: `Các điểm ngoại lai có thể làm sai lệch giá trị trung bình, bóp méo biểu đồ so sánh trên Dashboard và dẫn đến quyết định phân bổ ngân sách thiếu chính xác nếu không được phân loại rõ là cơ hội đột biến hay lỗi vận hành.`,
      recommendation: `Ngắn hạn: Rà soát trực tiếp từng dòng trong Mục V (Cảnh báo Bất thường) để xác minh chứng từ gốc. Trung hạn: Thiết lập ngưỡng cảnh báo sớm tự động khi ${riskMetric?.name || 'chỉ số'} vượt mức trung bình 1.5 lần.`
    });
  }

  // 1b. Rich Chapter I Context & Methodology Narrative
  const numCount = (ctx.colProfiles || []).filter(c => c.type === 'number').length;
  const catCount = (ctx.colProfiles || []).filter(c => c.type === 'category').length;
  const chapter1Sections = {
    overview: `**${company}** hoạt động trong lĩnh vực **${industry}**. Trong kỳ đánh giá hiện tại, Ban Lãnh đạo đặt ra mục tiêu trọng tâm là **"${objective}"**, xoay quanh bài toán cốt lõi: *"${question}"*. Báo cáo này phân tích toàn diện trên tập dữ liệu "${datasetName}" gồm **${totalRows.toLocaleString('vi-VN')} bản ghi** và **${(ctx.colProfiles || []).length} trường thông tin** (${numCount} chỉ tiêu định lượng và ${catCount} chiều phân loại).`,
    methodology: `Báo cáo áp dụng khung phân tích kinh doanh chuẩn quốc tế gồm 4 phương pháp bổ trợ: **(1) Mô hình Balanced Scorecard (Thẻ điểm Cân bằng)** đánh giá đa khía cạnh dựa trên các dữ liệu thực có; **(2) Phân tích Tập trung Pareto (80/20)** xác định nhóm động lực chính; **(3) Phân tích Xu hướng & Độ biến động chuỗi thời gian**; và **(4) Kiểm định Ngoại lai Tukey IQR** để phát hiện rủi ro vận hành. Độ tin cậy dữ liệu đầu vào đạt **Health Score ${healthScore}/100** (${totalMissingCells} ô thiếu, ${anomalyRecords.length} điểm ngoại lai).`
  };

  // 5. Balanced Scorecard (BSC) Dynamic Perspectives (Deep Analysis, Skip any perspective without relevant data)
  const bscPerspectives = [];
  const findCols = (regex) => (ctx.colProfiles || []).filter(c => regex.test(c.name));
  const totalPrimarySum = categoryBreakdown.reduce((s, g) => s + g.primarySum, 0) || 1;

  // 2.1 Financial Perspective
  const finCols = findCols(/doanh_thu|sales|revenue|chi_phi|cost|expense|loi_nhuan|profit|ngan_sach|budget|thu_nhap|amount|total/i);
  if (finCols.length > 0 && primaryMetric) {
    const revCol = finCols.find(c => /doanh_thu|sales|revenue|profit|loi_nhuan|amount|total/i.test(c.name)) || primaryMetric;
    const costCol = finCols.find(c => c !== revCol && /chi_phi|cost|expense|ngan_sach|budget/i.test(c.name)) || secondaryMetric;
    const bestMarginGrp = categoryBreakdown.length ? [...categoryBreakdown].sort((a, b) => (b.marginPct ?? -999) - (a.marginPct ?? -999))[0] : null;
    const worstMarginGrp = categoryBreakdown.length ? [...categoryBreakdown].sort((a, b) => (a.marginPct ?? 999) - (b.marginPct ?? 999))[0] : null;
    const trendPct = trendSeries.length >= 2
      ? (((trendSeries[trendSeries.length - 1].primary - trendSeries[0].primary) / (Math.abs(trendSeries[0].primary) || 1)) * 100).toFixed(1)
      : null;

    const marginText = (revCol && costCol && revCol.sum > 0)
      ? `Tổng ${revCol.name} toàn kỳ đạt **${formatNumberVN(revCol.sum, true)}** (trung bình **${formatNumberVN(revCol.mean, true)}**/giao dịch, trung vị ${formatNumberVN(revCol.median, true)}), trong khi tổng ${costCol.name} là **${formatNumberVN(costCol.sum, true)}**. Chênh lệch/lãi gộp ròng đạt **${formatNumberVN(revCol.sum - costCol.sum, true)}**, tương ứng biên hiệu quả bình quân **${(((revCol.sum - costCol.sum) / revCol.sum) * 100).toFixed(1)}%**.`
      : `Tổng ${revCol.name} toàn kỳ đạt **${formatNumberVN(revCol.sum, true)}**, trung bình **${formatNumberVN(revCol.mean, true)}**/bản ghi (trung vị ${formatNumberVN(revCol.median, true)}, độ lệch chuẩn ${formatNumberVN(revCol.stdDev, true)}), dao động từ mức thấp nhất ${formatNumberVN(revCol.min, true)} đến cao nhất ${formatNumberVN(revCol.max, true)}.`;

    const deepFin = [
      bestMarginGrp && worstMarginGrp && bestMarginGrp.marginPct !== null
        ? `Xét theo cơ cấu phân nhóm, "${bestMarginGrp.label}" đạt hiệu suất sinh lời cao nhất (${bestMarginGrp.marginPct.toFixed(1)}%, đóng góp chênh lệch ${formatNumberVN(bestMarginGrp.netDelta, true)}), trong khi "${worstMarginGrp.label}" chỉ đạt ${worstMarginGrp.marginPct.toFixed(1)}% — tạo ra khoảng cách hiệu quả ${(bestMarginGrp.marginPct - worstMarginGrp.marginPct).toFixed(1)} điểm %.`
        : '',
      trendPct !== null
        ? `Về động lượng tài chính theo thời gian (${trendSeries.length} kỳ), chỉ số ${revCol.name} ghi nhận mức biến động **${Number(trendPct) >= 0 ? '+' : ''}${trendPct}%** từ "${trendSeries[0].label}" đến "${trendSeries[trendSeries.length - 1].label}".`
        : ''
    ].filter(Boolean).join(' ');

    bscPerspectives.push({
      code: 'financial',
      title: 'Khía cạnh Tài chính (Financial Perspective)',
      summary: `${marginText} ${deepFin}`,
      evaluation: overallMargin >= 20
        ? `Hiệu quả tài chính chung duy trì ở ngưỡng tích cực (${overallMargin.toFixed(1)}%). Tuy nhiên, sự phân hóa biên lợi nhuận giữa nhóm dẫn đầu và nhóm cuối cho thấy vẫn còn dư địa lớn để tối ưu chi phí vận hành.`
        : `Biên tài chính hiện ở mức thận trọng (${overallMargin.toFixed(1)}%). Doanh nghiệp cần rà soát ngay định mức chi phí trên từng đơn vị doanh thu tại các nhóm có biên thấp.`,
      implication: `Ưu tiên tái phân bổ ngân sách từ nhóm biên thấp sang nhóm có biên vượt chuẩn trung bình (${overallMargin.toFixed(1)}%), đồng thời kiểm soát chặt tỷ lệ ${costCol?.name || 'chi phí'} trong kỳ tới.`
    });
  }

  // 2.2 Customer & Market Perspective
  const custCols = findCols(/customer|khach_hang|segment|phan_khuc|channel|kenh|region|khu_vuc|city|thanh_pho|so_don|order|lead|chuyen_doi/i);
  if (custCols.length > 0 && categoryBreakdown.length > 0) {
    const dimLabel = groupDim?.name || custCols[0].name;
    const topSharePct = ((topGroup.primarySum / totalPrimarySum) * 100).toFixed(1);
    const botSharePct = ((bottomGroup.primarySum / totalPrimarySum) * 100).toFixed(1);
    const gapX = (topGroup.primarySum / (bottomGroup.primarySum || 1)).toFixed(1);
    const secNote = secondaryBreakdown.length >= 2
      ? ` Đối chiếu thêm theo chiều ${secondaryDim?.name}, nhóm "${secondaryBreakdown[0].label}" dẫn đầu với ${formatNumberVN(secondaryBreakdown[0].primarySum, true)} (${((secondaryBreakdown[0].primarySum / totalPrimarySum) * 100).toFixed(1)}%), bỏ xa nhóm "${secondaryBreakdown[secondaryBreakdown.length - 1].label}" (${formatNumberVN(secondaryBreakdown[secondaryBreakdown.length - 1].primarySum, true)}).`
      : '';

    bscPerspectives.push({
      code: 'customer',
      title: 'Khía cạnh Khách hàng & Thị trường (Customer Perspective)',
      summary: `Phân tích ${categoryBreakdown.length} phân khúc/khu vực theo chiều **${dimLabel}** cho thấy cấu trúc phân hóa rõ rệt: **"${topGroup.label}"** giữ vai trò đầu tàu với **${formatNumberVN(topGroup.primarySum, true)}** (chiếm **${topSharePct}%** tổng quy mô, bình quân ${formatNumberVN(topGroup.primaryAvg, true)}/giao dịch). Nhóm đứng cuối là "${bottomGroup.label}" chỉ đạt ${formatNumberVN(bottomGroup.primarySum, true)} (${botSharePct}%), tạo khoảng cách quy mô lên tới **${gapX}x**. Top ${topNCount} nhóm dẫn đầu chiếm **${topNShare.toFixed(1)}%** toàn thị trường.${secNote}`,
      evaluation: topNShare > 70
        ? `Mức độ tập trung vào Top nhóm đang ở ngưỡng cao (${topNShare.toFixed(1)}% > 70%), tiềm ẩn rủi ro phụ thuộc nếu kênh/phân khúc chủ lực gặp biến động nhu cầu hoặc tăng chi phí tiếp cận.`
        : `Cơ cấu khách hàng và thị trường phân bổ tương đối cân bằng (${topNShare.toFixed(1)}%), giúp doanh nghiệp có nền tảng đa dạng hóa doanh thu tốt.`,
      implication: `Xây dựng chiến lược giữ chân và gia tăng giá trị vòng đời (LTV) tại "${topGroup.label}", đồng thời triển khai chương trình kích thích chuyển đổi riêng cho các nhóm quy mô trung bình và thấp.`
    });
  }

  // 2.3 Internal Business Processes Perspective
  const procCols = findCols(/hoan|return|loi|error|chien_dich|campaign|trang_thai|status|thoi_gian|ngay|date/i);
  if (procCols.length > 0 || anomalyRecords.length > 0 || totalMissingCells > 0) {
    const riskGroup = (riskMetric && categoryBreakdown.length)
      ? [...categoryBreakdown].sort((a, b) => (b.riskAvg || 0) - (a.riskAvg || 0))[0]
      : null;
    bscPerspectives.push({
      code: 'process',
      title: 'Khía cạnh Quy trình Nội bộ & Vận hành (Internal Business Processes)',
      summary: `Đánh giá quy trình ghi nhận và kiểm soát vận hành đạt chỉ số **Health Score ${healthScore}/100** (ghi nhận ${totalMissingCells} ô thiếu dữ liệu và ${anomalyRecords.length} điểm ngoại lai theo chuẩn Tukey IQR).${riskMetric ? ` Chỉ số vận hành/rủi ro **${riskMetric.name}** đạt trung bình **${formatNumberVN(riskMetric.mean)}** (dao động từ ${formatNumberVN(riskMetric.min)} đến ${formatNumberVN(riskMetric.max)}).` : ''}${riskGroup && riskGroup.riskAvg > 0 ? ` Đáng chú ý, nhóm "${riskGroup.label}" có mức ${riskMetric.name} bình quân cao nhất (${formatNumberVN(riskGroup.riskAvg)}).` : ''}`,
      evaluation: anomalyRecords.length > 0 || totalMissingCells > 0
        ? `Quy trình vận hành còn tồn tại ${anomalyRecords.length} điểm ngoại lai và ${totalMissingCells} ô dữ liệu trống. Điều này cho thấy khâu kiểm soát chất lượng hoặc xử lý ngoại lệ tại hiện trường chưa đồng nhất.`
        : `Quy trình vận hành và chuẩn hóa dữ liệu nội bộ vận hành trơn tru, không phát sinh lỗi thiếu dữ liệu hay biến động ngoại lai bất thường.`,
      implication: `Chuẩn hóa quy trình kiểm soát chứng từ đầu vào, rà soát trực tiếp các giao dịch ngoại lai tại ${riskGroup ? `"${riskGroup.label}"` : 'nhóm rủi ro cao'} để giảm thất thoát vận hành.`
    });
  }

  // 2.4 Learning & Growth / HR Perspective (Only shown if HR/KPI/Learning columns exist)
  const hrCols = findCols(/ma_nv|nhan_su|phong_ban|cap_bac|kpi|gio_ot|du_an|dao_tao|training|skill|productivity/i);
  if (hrCols.length > 0) {
    const kpiCol = hrCols.find(c => /kpi|score|diem/i.test(c.name)) || hrCols[0];
    const otCol = hrCols.find(c => /ot|gio_ot/i.test(c.name));
    bscPerspectives.push({
      code: 'learning',
      title: 'Khía cạnh Học hỏi & Phát triển / Nhân sự (Learning & Growth)',
      summary: `Hệ thống ghi nhận ${hrCols.length} chỉ tiêu thuộc năng lực tổ chức và nhân sự (${hrCols.map(c => c.name).join(', ')}).${kpiCol?.type === 'number' ? ` Chỉ số hiệu suất **${kpiCol.name}** đạt bình quân **${formatNumberVN(kpiCol.mean)}** (trung vị ${formatNumberVN(kpiCol.median)}, biên độ từ ${formatNumberVN(kpiCol.min)} đến ${formatNumberVN(kpiCol.max)}).` : ''}${otCol?.type === 'number' ? ` Cường độ làm thêm giờ (**${otCol.name}**) trung bình ${formatNumberVN(otCol.mean)} giờ, cao nhất lên tới ${formatNumberVN(otCol.max)} giờ.` : ''}`,
      evaluation: otCol && otCol.max > otCol.mean * 1.5
        ? `Tồn tại sự mất cân đối tải công việc giữa các vị trí/phòng ban (${otCol.name} đỉnh gấp ${(otCol.max / (otCol.mean || 1)).toFixed(1)} lần mức bình quân), tiềm ẩn nguy cơ kiệt sức và giảm chất lượng đầu ra.`
        : `Năng suất nhân sự và phân bổ khối lượng công việc giữ ở mức cân bằng, đáp ứng tốt mục tiêu vận hành.`,
      implication: `Thiết kế chương trình đào tạo chéo kỹ năng cho các vị trí có chỉ số thấp và tái phân bổ nguồn lực tại bộ phận đang quá tải giờ làm thêm.`
    });
  }

  // 6. Chapter III: Strengths & Limitations Summary
  const strengths = [];
  const limitations = [];
  if (topGroup) strengths.push(`Xác định rõ động lực tăng trưởng chủ lực là "${topGroup.label}" (${formatNumberVN(topGroup.primarySum, true)}), giúp tập trung nguồn lực hiệu quả.`);
  if (overallMargin >= 20 && secondaryMetric) strengths.push(`Biên hiệu quả trung bình toàn kỳ đạt ${overallMargin.toFixed(1)}%, đảm bảo khả năng sinh lời/chênh lệch dương.`);
  if (healthScore >= 90) strengths.push(`Chất lượng dữ liệu đạt mức cao (${healthScore}/100), tạo nền tảng tin cậy cho quyết định quản trị.`);
  if (trendSeries.length >= 2 && trendSeries[trendSeries.length - 1].primary >= trendSeries[0].primary) {
    strengths.push(`Xu hướng tổng thể tăng trưởng dương từ "${trendSeries[0].label}" đến "${trendSeries[trendSeries.length - 1].label}".`);
  }

  if (topNShare > 70) limitations.push(`Độ tập trung Pareto cao (${topNShare.toFixed(1)}%): doanh nghiệp phụ thuộc lớn vào nhóm dẫn đầu, dễ tổn thương khi thị trường biến động.`);
  if (anomalyRecords.length > 0) limitations.push(`Còn ${anomalyRecords.length} điểm ngoại lai (IQR) và ${totalMissingCells} ô thiếu cần kiểm chứng chứng từ gốc.`);
  if (categoryBreakdown.length >= 2 && secondaryMetric) {
    const lowEff = [...categoryBreakdown].sort((a, b) => (a.marginPct ?? 999) - (b.marginPct ?? 999))[0];
    if (lowEff && lowEff.marginPct !== null && lowEff.marginPct < overallMargin) {
      limitations.push(`Nhóm "${lowEff.label}" có biên hiệu quả thấp nhất (${lowEff.marginPct.toFixed(1)}%), đang kéo giảm hiệu suất chung.`);
    }
  }
  if (!limitations.length) limitations.push('Chưa phát hiện điểm nghẽn nghiêm trọng; cần tiếp tục duy trì giám sát định kỳ theo từng chu kỳ.');

  return {
    company,
    industry,
    objective,
    question,
    overallMargin,
    chapter1Sections,
    directAnswer,
    decisionMatrix,
    dashboardDeepDive,
    bscPerspectives,
    strengthsAndLimitations: { strengths, limitations },
    insights
  };
}

function cleanDataset(rawRows) {
  const seen = new Set();
  const cleaned = [];
  let removedDuplicates = 0;
  let filledMissing = 0;
  let trimmedStrings = 0;

  const colSet = new Set();
  rawRows.forEach(r => Object.keys(r).forEach(k => colSet.add(k)));
  const columns = Array.from(colSet);
  const medians = {};

  columns.forEach(col => {
    const nums = rawRows.map(r => parseNumeric(r[col])).filter(n => n !== null).sort((a, b) => a - b);
    if (nums.length > 0 && nums.length >= rawRows.length * 0.5) {
      const mid = Math.floor(nums.length / 2);
      medians[col] = nums.length % 2 !== 0 ? nums[mid] : Math.round((nums[mid - 1] + nums[mid]) / 2);
    }
  });

  rawRows.forEach(r => {
    const row = {};
    columns.forEach(col => {
      let val = r[col];
      if (typeof val === 'string') {
        const trimmed = val.trim().replace(/\s+/g, ' ');
        if (trimmed !== val) trimmedStrings++;
        val = trimmed;
      }
      if (val === null || val === undefined || val === '') {
        filledMissing++;
        row[col] = medians[col] !== undefined ? medians[col] : 'Chưa phân loại';
      } else {
        row[col] = val;
      }
    });
    const sig = JSON.stringify(row);
    if (seen.has(sig)) removedDuplicates++;
    else {
      seen.add(sig);
      cleaned.push(row);
    }
  });

  return {
    cleanedRows: cleaned,
    report: { removedDuplicates, filledMissing, trimmedStrings }
  };
}

function applyHumanCleaningInstructions(rows, instructionText) {
  let updated = rows.map(r => ({ ...r }));
  const appliedNotes = [];
  const text = (instructionText || '').trim();
  if (!text || !updated.length) return { rows: updated, appliedNotes, matched: false };

  const clauses = text.split(/[;\n]+/).map(s => s.trim()).filter(Boolean);
  const findCol = (name) => {
    const raw = String(name || '').trim().toLowerCase();
    if (!raw) return null;
    const cols = Object.keys(updated[0] || {});
    const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[_\s-]+/g, '');
    const rawNorm = norm(raw);

    // 1. Exact or normalized match
    const direct = cols.find(c => c.toLowerCase() === raw) || cols.find(c => norm(c) === rawNorm);
    if (direct) return direct;

    // 2. Partial match
    const partial = cols.find(c => c.toLowerCase().includes(raw) || norm(c).includes(rawNorm));
    if (partial) return partial;

    // 3. Vietnamese / English semantic aliases
    const aliasRules = [
      { keys: ['doanh thu', 'doanh so', 'sales', 'revenue', 'tien ban'], pat: /doanh_thu|sales|revenue|amount|total/i },
      { keys: ['chi phi', 'gia von', 'cost', 'expense', 'ngan sach'], pat: /chi_phi|cost|expense|ngan_sach|budget/i },
      { keys: ['loi nhuan', 'lai', 'profit', 'margin'], pat: /loi_nhuan|profit|margin/i },
      { keys: ['ty le hoan', 'hoan hang', 'hoan tra', 'return'], pat: /hoan|return/i },
      { keys: ['so don', 'don hang', 'order id', 'ma don'], pat: /so_don|order/i },
      { keys: ['ngay', 'thoi gian', 'date', 'thang', 'tuan'], pat: /date|ngay|thang|tuan|time/i },
      { keys: ['thanh pho', 'tinh', 'city'], pat: /city|thanh_pho|tinh/i },
      { keys: ['khu vuc', 'mien', 'vung', 'region'], pat: /region|khu_vuc|area/i },
      { keys: ['kenh', 'san', 'channel'], pat: /channel|kenh/i },
      { keys: ['phan khuc', 'nhom khach', 'segment'], pat: /segment|phan_khuc/i },
      { keys: ['khach hang', 'customer'], pat: /customer|khach_hang/i },
      { keys: ['danh muc', 'nganh hang', 'category'], pat: /category|danh_muc/i },
      { keys: ['gio ot', 'lam them', 'ot'], pat: /gio_ot|ot/i },
      { keys: ['kpi', 'diem'], pat: /kpi|diem|score/i },
      { keys: ['phong ban', 'bo phan'], pat: /phong_ban|department/i }
    ];

    for (const rule of aliasRules) {
      if (rule.keys.some(k => rawNorm.includes(norm(k)) || raw.includes(k))) {
        const hit = cols.find(c => rule.pat.test(c));
        if (hit) return hit;
      }
    }
    return null;
  };

  clauses.forEach(clause => {
    const cLower = clause.toLowerCase();

    // 1. Rename column: "đổi tên cột A thành B" / "sửa tên cột A -> B"
    const renCol = clause.match(/^(?:đổi|sửa|thay)\s+tên\s+cột\s+["']?(.+?)["']?\s+(?:thành|sang|->|=>)\s+["']?(.+?)["']?$/i);
    if (renCol) {
      const oldCol = findCol(renCol[1]);
      const newCol = renCol[2].trim();
      if (oldCol && newCol && oldCol !== newCol) {
        updated.forEach(r => {
          r[newCol] = r[oldCol];
          delete r[oldCol];
        });
        appliedNotes.push(`Đã đổi tên cột "${oldCol}" → "${newCol}".`);
      }
      return;
    }

    // 2. Drop column: "xóa cột X" / "bỏ cột X"
    const dropCol = clause.match(/^(?:xóa|bỏ|loại|loại bỏ)\s+cột\s+["']?(.+?)["']?$/i);
    if (dropCol) {
      const targetCol = findCol(dropCol[1]);
      if (targetCol) {
        updated.forEach(r => delete r[targetCol]);
        appliedNotes.push(`Đã xóa cột "${targetCol}".`);
      }
      return;
    }

    // 3. Add calculated or constant column: "thêm cột Loi_Nhuan = Sales_VND - Cost_VND"
    const addCol = clause.match(/^(?:thêm|tạo)\s+cột\s+["']?([a-zA-Z0-9_\u00C0-\u024F\u1E00-\u1EFF]+)["']?\s*(?:=|bằng)\s*(.+)$/i);
    if (addCol) {
      const newCol = addCol[1].trim();
      const expr = addCol[2].trim();
      const mathMatch = expr.match(/^([a-zA-Z0-9_]+)\s*([+\-*/])\s*([a-zA-Z0-9_.]+)$/);
      if (mathMatch) {
        const colA = findCol(mathMatch[1]);
        const op = mathMatch[2];
        const colB = findCol(mathMatch[3]);
        const numB = parseNumeric(mathMatch[3]);
        if (colA && (colB || numB !== null)) {
          updated.forEach(r => {
            const a = parseNumeric(r[colA]) || 0;
            const b = colB ? (parseNumeric(r[colB]) || 0) : numB;
            let res = 0;
            if (op === '+') res = a + b;
            else if (op === '-') res = a - b;
            else if (op === '*') res = a * b;
            else if (op === '/') res = b !== 0 ? +(a / b).toFixed(2) : 0;
            r[newCol] = res;
          });
          appliedNotes.push(`Đã thêm cột tính toán "${newCol} = ${expr}".`);
          return;
        }
      }
      updated.forEach(r => { r[newCol] = expr.replace(/^["']|["']$/g, ''); });
      appliedNotes.push(`Đã thêm cột "${newCol}" với giá trị "${expr}".`);
      return;
    }

    // 4. Math transform on existing column: "tăng doanh thu lên 10%", "giảm Cost_VND 5%", "làm tròn tỷ lệ hoàn"
    const pctMatch = clause.match(/^(tăng|giảm)\s+(?:cột\s+)?(.+?)\s+(?:lên|đi|thêm)?\s*(\d+(?:\.\d+)?)\s*%$/i);
    if (pctMatch) {
      const col = findCol(pctMatch[2]);
      const pct = parseFloat(pctMatch[3]) / 100;
      const factor = pctMatch[1].toLowerCase() === 'tăng' ? (1 + pct) : (1 - pct);
      if (col) {
        updated.forEach(r => {
          const v = parseNumeric(r[col]);
          if (v !== null) r[col] = Math.round(v * factor * 100) / 100;
        });
        appliedNotes.push(`Đã ${pctMatch[1].toLowerCase()} cột "${col}" ${pctMatch[3]}%.`);
        return;
      }
    }

    const roundMatch = clause.match(/^làm tròn\s+(?:cột\s+)?(.+)$/i);
    if (roundMatch) {
      const col = findCol(roundMatch[1]);
      if (col) {
        updated.forEach(r => {
          const v = parseNumeric(r[col]);
          if (v !== null) r[col] = Math.round(v);
        });
        appliedNotes.push(`Đã làm tròn số nguyên cột "${col}".`);
        return;
      }
    }

    // 5. Numeric filter: "xóa dòng có doanh thu < 1000000" or "chỉ giữ Sales_VND >= 5000000"
    const numFilter = clause.match(/^(xóa|bỏ|loại|giữ|chỉ giữ|lọc)\s+(?:dòng\s+(?:có|với)\s+)?(.+?)\s*(>=|<=|>|<|=|!=)\s*(\d+(?:[.,]\d+)?)$/i);
    if (numFilter) {
      const action = numFilter[1].toLowerCase();
      const col = findCol(numFilter[2]);
      const op = numFilter[3];
      const threshold = parseNumeric(numFilter[4]);
      if (col && threshold !== null) {
        const before = updated.length;
        const testCond = (v) => {
          if (v === null) return false;
          if (op === '>') return v > threshold;
          if (op === '<') return v < threshold;
          if (op === '>=') return v >= threshold;
          if (op === '<=') return v <= threshold;
          if (op === '=') return v === threshold;
          if (op === '!=') return v !== threshold;
          return false;
        };
        const isKeep = /giữ|lọc/.test(action);
        const next = updated.filter(r => {
          const hit = testCond(parseNumeric(r[col]));
          return isKeep ? hit : !hit;
        });
        if (next.length > 0 && next.length < before) {
          updated = next;
          appliedNotes.push(`Đã ${isKeep ? 'giữ lại' : 'xóa'} theo điều kiện "${col} ${op} ${threshold}" (còn ${updated.length}/${before} dòng).`);
        }
        return;
      }
    }

    // 6. Text formatting: "viết hoa cột X", "viết thường cột X", "chuẩn hóa cột X"
    const caseMatch = clause.match(/^(viết hoa|viết thường|chuẩn hóa)\s+(?:cột\s+)?(.+)$/i);
    if (caseMatch) {
      const mode = caseMatch[1].toLowerCase();
      const col = findCol(caseMatch[2]);
      if (col) {
        updated.forEach(r => {
          if (typeof r[col] === 'string') {
            if (mode === 'viết hoa') r[col] = r[col].toUpperCase();
            else if (mode === 'viết thường') r[col] = r[col].toLowerCase();
            else r[col] = r[col].trim().replace(/\s+/g, ' ');
          }
        });
        appliedNotes.push(`Đã ${mode} cột "${col}".`);
        return;
      }
    }

    // 7. Sort rows: handles "sắp xếp doanh thu giảm dần", "sắp xếp giảm dần theo doanh thu", "xếp theo Sales_VND từ cao đến thấp"
    if (/^(?:sắp xếp|xếp|sort)\b/i.test(cLower)) {
      const isAsc = /tăng dần|từ thấp đến cao|nhỏ đến lớn|\basc\b/i.test(cLower);
      const desc = !isAsc;
      const colText = clause
        .replace(/^(?:sắp xếp|xếp|sort)\s*/i, '')
        .replace(/\b(?:tăng dần|giảm dần|từ cao đến thấp|từ thấp đến cao|lớn đến nhỏ|nhỏ đến lớn|asc|desc)\b/gi, '')
        .replace(/\b(?:theo|cột|by)\b/gi, '')
        .trim();
      const col = findCol(colText);
      if (col) {
        updated.sort((a, b) => {
          const na = parseNumeric(a[col]);
          const nb = parseNumeric(b[col]);
          if (na !== null && nb !== null) return desc ? nb - na : na - nb;
          return desc
            ? String(b[col] ?? '').localeCompare(String(a[col] ?? ''))
            : String(a[col] ?? '').localeCompare(String(b[col] ?? ''));
        });
        appliedNotes.push(`Đã sắp xếp bảng theo "${col}" (${desc ? 'giảm dần' : 'tăng dần'}).`);
        return;
      }
    }

    // 8. Fill missing or remove rows with missing values
    if (/xóa.*(?:ô trống|thiếu|null|missing|rỗng)/i.test(cLower)) {
      const before = updated.length;
      const next = updated.filter(r => Object.values(r).every(v => v !== null && v !== undefined && String(v).trim() !== ''));
      if (next.length > 0) {
        updated = next;
        appliedNotes.push(`Đã xóa ${before - updated.length} dòng có ô trống (còn ${updated.length} dòng).`);
      }
      return;
    }
    const fillMatch = clause.match(/^(?:điền|thay ô trống bằng)\s+["']?(.+?)["']?(?:\s+cho ô trống)?$/i);
    if (fillMatch) {
      const fillVal = fillMatch[1].trim();
      let count = 0;
      updated.forEach(r => {
        Object.keys(r).forEach(k => {
          if (r[k] === null || r[k] === undefined || String(r[k]).trim() === '' || r[k] === 'Chưa phân loại') {
            r[k] = fillVal;
            count++;
          }
        });
      });
      appliedNotes.push(`Đã điền "${fillVal}" cho ${count} ô trống/chưa phân loại.`);
      return;
    }

    // 9. Deduplicate: "xóa trùng lặp" / "xóa trùng theo Order_ID"
    if (/xóa trùng/i.test(cLower)) {
      const byCol = clause.match(/theo\s+([a-zA-Z0-9_]+)/i);
      const col = byCol ? findCol(byCol[1]) : null;
      const seen = new Set();
      const before = updated.length;
      updated = updated.filter(r => {
        const key = col ? String(r[col] ?? '') : JSON.stringify(r);
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
      appliedNotes.push(`Đã xóa ${before - updated.length} dòng trùng${col ? ` theo "${col}"` : ''} (còn ${updated.length} dòng).`);
      return;
    }

    // 10. Top N / Slice: "chỉ giữ 50 dòng đầu"
    const topMatch = clause.match(/^(?:chỉ giữ|lấy)\s+(\d+)\s+dòng\s+đầu$/i);
    if (topMatch) {
      const n = parseInt(topMatch[1], 10);
      if (n > 0 && n < updated.length) {
        updated = updated.slice(0, n);
        appliedNotes.push(`Đã giữ lại ${n} dòng đầu tiên.`);
      }
      return;
    }

    // 10b. Conditional update: "nếu <col> <op> <val> thì sửa/gán/đổi <targetCol> thành/= <newVal>"
    const ifMatch = clause.match(/^nếu\s+([a-zA-Z0-9_]+)\s*(>=|<=|>|<|=|!=|là|bằng|chứa)\s*["']?(.+?)["']?\s+thì\s+(?:sửa|gán|đổi|đặt)\s+(?:cột\s+)?([a-zA-Z0-9_]+)\s*(?:thành|=|bằng)\s*["']?(.+?)["']?$/i);
    if (ifMatch) {
      const condCol = findCol(ifMatch[1]);
      const op = ifMatch[2].toLowerCase();
      const condVal = ifMatch[3].trim();
      const targetCol = findCol(ifMatch[4]) || ifMatch[4].trim();
      const rawNew = ifMatch[5].trim();
      const numNew = parseNumeric(rawNew);
      const newVal = (numNew !== null && !/^0\d+$/.test(rawNew)) ? numNew : rawNew;

      if (condCol) {
        let count = 0;
        updated.forEach(r => {
          const cell = r[condCol];
          const numCell = parseNumeric(cell);
          const numCond = parseNumeric(condVal);
          let hit = false;
          if (['>', '<', '>=', '<='].includes(op) && numCell !== null && numCond !== null) {
            if (op === '>') hit = numCell > numCond;
            else if (op === '<') hit = numCell < numCond;
            else if (op === '>=') hit = numCell >= numCond;
            else if (op === '<=') hit = numCell <= numCond;
          } else if (op === '!=') {
            hit = String(cell ?? '').trim().toLowerCase() !== condVal.toLowerCase();
          } else if (op === 'chứa') {
            hit = String(cell ?? '').toLowerCase().includes(condVal.toLowerCase());
          } else {
            hit = String(cell ?? '').trim().toLowerCase() === condVal.toLowerCase();
          }
          if (hit) {
            r[targetCol] = newVal;
            count++;
          }
        });
        appliedNotes.push(`Đã cập nhật có điều kiện "${targetCol} = ${newVal}" cho ${count} dòng thỏa "${condCol} ${op} ${condVal}".`);
        return;
      }
    }

    // 10c. Merge columns: "gộp cột A và B thành C"
    const mergeMatch = clause.match(/^gộp\s+(?:cột\s+)?([a-zA-Z0-9_]+)\s+(?:và|với|\+)\s+([a-zA-Z0-9_]+)\s+(?:thành|sang|->)\s+([a-zA-Z0-9_\u00C0-\u024F\u1E00-\u1EFF]+)$/i);
    if (mergeMatch) {
      const colA = findCol(mergeMatch[1]);
      const colB = findCol(mergeMatch[2]);
      const target = mergeMatch[3].trim();
      if (colA && colB) {
        updated.forEach(r => {
          r[target] = `${r[colA] ?? ''} - ${r[colB] ?? ''}`.replace(/^\s*-\s*|\s*-\s*$/g, '');
        });
        appliedNotes.push(`Đã gộp cột "${colA}" và "${colB}" thành "${target}".`);
        return;
      }
    }

    // 10d. Split column: "tách cột A theo <sep> thành B, C"
    const splitMatch = clause.match(/^tách\s+(?:cột\s+)?([a-zA-Z0-9_]+)\s+(?:theo|bằng)\s+["']?(.+?)["']?\s+thành\s+(.+)$/i);
    if (splitMatch) {
      const srcCol = findCol(splitMatch[1]);
      const sep = splitMatch[2] === 'khoảng trắng' ? ' ' : splitMatch[2];
      const targets = splitMatch[3].split(/[,;]+/).map(s => s.trim()).filter(Boolean);
      if (srcCol && targets.length >= 2) {
        updated.forEach(r => {
          const parts = String(r[srcCol] ?? '').split(sep);
          targets.forEach((t, idx) => { r[t] = (parts[idx] ?? '').trim(); });
        });
        appliedNotes.push(`Đã tách cột "${srcCol}" thành ${targets.join(', ')}.`);
        return;
      }
    }

    // 10e. Strip substring / Add prefix / Extract month:
    const stripMatch = clause.match(/^(?:bỏ|xóa)\s+(?:chữ|ký tự|từ|chuỗi)\s+["']?(.+?)["']?\s+(?:trong|ở)\s+(?:cột\s+)?([a-zA-Z0-9_]+)$/i);
    if (stripMatch) {
      const sub = stripMatch[1];
      const col = findCol(stripMatch[2]);
      if (col) {
        let count = 0;
        updated.forEach(r => {
          const s = String(r[col] ?? '');
          if (s.includes(sub)) {
            r[col] = s.split(sub).join('').trim();
            count++;
          }
        });
        appliedNotes.push(`Đã bỏ "${sub}" trong cột "${col}" (${count} ô).`);
        return;
      }
    }

    const prefixMatch = clause.match(/^thêm\s+(?:tiền tố|chữ)\s+["']?(.+?)["']?\s+(?:vào|cho)\s+(?:cột\s+)?([a-zA-Z0-9_]+)$/i);
    if (prefixMatch) {
      const pre = prefixMatch[1];
      const col = findCol(prefixMatch[2]);
      if (col) {
        updated.forEach(r => { r[col] = `${pre}${r[col] ?? ''}`; });
        appliedNotes.push(`Đã thêm tiền tố "${pre}" cho cột "${col}".`);
        return;
      }
    }

    const monthExtract = clause.match(/^(?:chuyển|rút gọn|lấy tháng)\s+(?:cột\s+)?([a-zA-Z0-9_]+)\s+(?:sang|thành)\s+tháng$/i);
    if (monthExtract) {
      const col = findCol(monthExtract[1]);
      if (col) {
        updated.forEach(r => {
          const s = String(r[col] ?? '').trim();
          if (/^\d{4}-\d{2}-\d{2}/.test(s)) r[col] = s.slice(0, 7);
        });
        appliedNotes.push(`Đã rút gọn cột "${col}" sang định dạng Tháng (YYYY-MM).`);
        return;
      }
    }

    // 10f. Remove outliers (IQR) or negative values: "xóa ngoại lai của Sales_VND" / "xóa giá trị âm"
    if (/xóa.*giá trị âm|loại.*số âm/i.test(cLower)) {
      const before = updated.length;
      updated = updated.filter(r => !Object.values(r).some(v => {
        const n = parseNumeric(v);
        return n !== null && n < 0;
      }));
      appliedNotes.push(`Đã xóa ${before - updated.length} dòng chứa giá trị âm (còn ${updated.length} dòng).`);
      return;
    }

    const outlierMatch = clause.match(/^(?:xóa|bỏ|loại)\s+(?:các\s+)?(?:dòng\s+)?ngoại lai(?:\s+(?:của|theo)\s+([a-zA-Z0-9_]+))?$/i);
    if (outlierMatch) {
      const col = outlierMatch[1] ? findCol(outlierMatch[1]) : Object.keys(updated[0] || {}).find(c => parseNumeric(updated[0][c]) !== null);
      if (col) {
        const nums = updated.map(r => parseNumeric(r[col])).filter(n => n !== null).sort((a, b) => a - b);
        if (nums.length >= 4) {
          const q1 = nums[Math.floor(nums.length * 0.25)];
          const q3 = nums[Math.floor(nums.length * 0.75)];
          const iqr = q3 - q1;
          const lo = q1 - 1.5 * iqr;
          const hi = q3 + 1.5 * iqr;
          const before = updated.length;
          updated = updated.filter(r => {
            const n = parseNumeric(r[col]);
            return n === null || (n >= lo && n <= hi);
          });
          appliedNotes.push(`Đã loại bỏ ${before - updated.length} dòng ngoại lai IQR theo "${col}" (còn ${updated.length} dòng).`);
          return;
        }
      }
    }

    // 10g. Edit or delete by explicit 1-based row number: "xóa dòng 1, 3" / "sửa dòng 2 cột City thành Đà Nẵng"
    const editCellMatch = clause.match(/^(?:sửa|đổi|gán)\s+dòng\s+(?:số\s+)?(\d+)\s+cột\s+([a-zA-Z0-9_]+)\s+(?:thành|=)\s+["']?(.+?)["']?$/i);
    if (editCellMatch) {
      const idx = parseInt(editCellMatch[1], 10) - 1;
      const col = findCol(editCellMatch[2]);
      if (idx >= 0 && idx < updated.length && col) {
        updated[idx][col] = editCellMatch[3].trim();
        appliedNotes.push(`Đã sửa dòng #${idx + 1}, cột "${col}" → "${editCellMatch[3].trim()}".`);
        return;
      }
    }

    const delRowIdxMatch = clause.match(/^(?:xóa|bỏ)\s+dòng\s+(?:số\s+)?([\d,\s]+)$/i);
    if (delRowIdxMatch) {
      const idxs = new Set(delRowIdxMatch[1].split(/[,\s]+/).map(x => parseInt(x, 10) - 1).filter(x => x >= 0));
      const before = updated.length;
      updated = updated.filter((_, i) => !idxs.has(i));
      if (updated.length < before) {
        appliedNotes.push(`Đã xóa ${before - updated.length} dòng theo chỉ số (còn ${updated.length} dòng).`);
        return;
      }
    }

    // 11. Replace value: "thay/đổi/sửa A thành/sang/-> B"
    const rep = clause.match(/^(?:thay|đổi|sửa)\s+["']?(.+?)["']?\s+(?:thành|sang|->|=>)\s+["']?(.+?)["']?$/i);
    if (rep) {
      const fromVal = rep[1].trim().toLowerCase();
      const toVal = rep[2].trim();
      let count = 0;
      updated.forEach(r => {
        Object.keys(r).forEach(k => {
          if (String(r[k] ?? '').trim().toLowerCase() === fromVal) {
            r[k] = toVal;
            count++;
          }
        });
      });
      if (count > 0) {
        appliedNotes.push(`Đã sửa "${rep[1].trim()}" → "${toVal}" (${count} ô).`);
      }
      return;
    }

    // 12. Drop rows by text/ID: "xóa cc-ord-103727" or "bỏ Miền Bắc"
    const dropRow = clause.match(/^(?:xóa|bỏ|loại|loại bỏ|trừ)\s+(?:dòng\s+(?:chứa|có)\s+)?["']?(.+?)["']?$/i);
    if (dropRow) {
      const kw = dropRow[1].trim().toLowerCase();
      const before = updated.length;
      const next = updated.filter(r => !Object.values(r).some(v => String(v ?? '').toLowerCase().includes(kw)));
      const removed = before - next.length;
      if (removed > 0) {
        updated = next;
        appliedNotes.push(`Đã xóa ${removed} dòng chứa "${dropRow[1].trim()}" (còn ${updated.length} dòng).`);
      }
      return;
    }

    // 13. Keep only rows by text or column+value: "giữ Hà Nội", "chỉ để lại miền bắc", "chỉ để lại danh mục xe đẩy & ghế ngồi"
    const keepRow = clause.match(/^(?:chỉ\s+để\s+lại|để\s+lại|chỉ\s+giữ(?:\s+lại)?|giữ(?:\s+lại)?|chỉ\s+lấy|lấy\s+riêng|chỉ\s+xem|xem\s+riêng|riêng|chỉ|lọc(?:\s+theo)?)\s+(?:dòng\s+(?:chứa|có)\s+|cột\s+|mỗi\s+|các\s+|những\s+)?["']?(.+?)["']?$/i);
    if (keepRow) {
      let rawExpr = keepRow[1].trim().replace(/^["']|["']$/g, '');
      const before = updated.length;

      // Check if expression starts with "<colName> [= ] <value>" (e.g. "kenh_ban website" or "Danh_Muc = Xe đẩy & Ghế ngồi")
      const colValMatch = rawExpr.match(/^([a-zA-Z0-9_]+)\s*(?:=|là|:|\s)\s*["']?(.+?)["']?$/i);
      const matchedCol = colValMatch ? findCol(colValMatch[1]) : null;
      if (matchedCol && colValMatch[2]) {
        const valKw = colValMatch[2].trim().replace(/^["']|["']$/g, '').toLowerCase();
        const next = updated.filter(r => String(r[matchedCol] ?? '').toLowerCase().includes(valKw));
        if (next.length > 0 && next.length < before) {
          updated = next;
          appliedNotes.push(`Đã giữ lại ${next.length}/${before} dòng có "${matchedCol}" chứa "${colValMatch[2].trim()}".`);
          return;
        }
      }

      // Strip common Vietnamese category labels (e.g. "danh mục xe đẩy & ghế ngồi" -> "xe đẩy & ghế ngồi")
      const strippedExpr = rawExpr.replace(/^(?:danh\s*mục|khu\s*vực|kênh(?:\s*bán)?|sản\s*phẩm|nhóm|loại|thành\s*phố|tỉnh|phân\s*khúc|giá\s*trị)\s+/i, '').trim();
      const candidates = Array.from(new Set([rawExpr.toLowerCase(), strippedExpr.toLowerCase()].filter(Boolean)));
      for (const kw of candidates) {
        const next = updated.filter(r => Object.values(r).some(v => String(v ?? '').toLowerCase().includes(kw)));
        if (next.length > 0 && next.length < before) {
          updated = next;
          appliedNotes.push(`Đã giữ lại ${next.length}/${before} dòng chứa "${strippedExpr || rawExpr}".`);
          return;
        }
      }

      // Support multiple values separated by " và " or "," (e.g. "chỉ để lại Hà Nội và Đà Nẵng")
      const multiTerms = (strippedExpr || rawExpr).split(/\s+và\s+|,/i).map(s => s.trim().toLowerCase()).filter(s => s.length >= 2);
      if (multiTerms.length > 1) {
        const next = updated.filter(r => multiTerms.some(kw => Object.values(r).some(v => String(v ?? '').toLowerCase().includes(kw))));
        if (next.length > 0 && next.length < before) {
          updated = next;
          appliedNotes.push(`Đã giữ lại ${next.length}/${before} dòng khớp (${multiTerms.join(', ')}).`);
        }
      }
    }
  });

  return { rows: updated, appliedNotes, matched: appliedNotes.length > 0 };
}

const DEFAULT_AGENT_API_KEY = 'AQ.Ab8RN6KsbvHjFtv8ndVBlEjfWf2P5OxJ8CW1ktVHQj_TGxoyJQ';
function getAgentApiKey() {
  return (localStorage.getItem('azurepulse_gemini_key') || DEFAULT_AGENT_API_KEY || '').trim();
}

async function callGeminiAPI(prompt, explicitKey = null, options = {}) {
  const apiKey = (explicitKey || getAgentApiKey()).trim();
  if (!apiKey) return { ok: false, error: 'Chưa nhập API Key' };
  const timeoutMs = options.timeoutMs || 10000;
  const fetchWithTimeout = async (url, init) => {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      return await fetch(url, { ...init, signal: controller.signal });
    } finally {
      clearTimeout(timer);
    }
  };

  // Auto-route OpenAI-compatible providers (Groq, OpenRouter, OpenAI)
  if (apiKey.startsWith('gsk_') || apiKey.startsWith('sk-')) {
    let endpoint = 'https://api.openai.com/v1/chat/completions';
    let model = 'gpt-4o-mini';
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    };
    if (apiKey.startsWith('gsk_')) {
      endpoint = 'https://api.groq.com/openai/v1/chat/completions';
      model = 'llama-3.3-70b-versatile';
    } else if (apiKey.startsWith('sk-or-')) {
      endpoint = 'https://openrouter.ai/api/v1/chat/completions';
      model = 'google/gemini-2.0-flash-001';
      headers['HTTP-Referer'] = window.location.origin || 'http://localhost';
      headers['X-Title'] = 'AzurePulse AI';
    }

    try {
      const resp = await fetch(endpoint, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          model,
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.25
        })
      });
      const data = await resp.json().catch(() => ({}));
      if (resp.ok) {
        const text = data?.choices?.[0]?.message?.content?.trim();
        if (text) return { ok: true, text, model };
      }
      return { ok: false, error: data?.error?.message || `HTTP ${resp.status}` };
    } catch (err) {
      return { ok: false, error: err.message || 'Lỗi mạng khi kết nối API' };
    }
  }

  // Google AI Studio (Gemini)
  const cachedWorking = localStorage.getItem('azurepulse_working_model') || '';
  const preferred = localStorage.getItem('azurepulse_gemini_model') || 'gemini-2.5-flash';
  const fastList = [cachedWorking, 'gemini-2.5-flash-lite', 'gemini-2.0-flash', 'gemini-2.5-flash', 'gemini-2.0-flash-lite', 'gemini-flash-latest', 'gemma-3-27b-it'];
  const defaultList = [cachedWorking, preferred, 'gemini-2.5-flash', 'gemini-2.5-flash-lite', 'gemini-2.0-flash', 'gemini-2.0-flash-lite', 'gemini-flash-latest', 'gemma-3-27b-it'];
  const models = Array.from(new Set((options.fast ? fastList : defaultList).filter(m => m && m !== 'gemini-1.5-flash' && m !== 'gemini-1.5-flash-latest')));
  let lastError = 'Không thể kết nối Google AI Studio API';
  let keyInvalid = false;

  for (const model of models) {
    try {
      const payload = { contents: [{ parts: [{ text: prompt }] }] };
      if (options.fast) {
        payload.generationConfig = { temperature: 0.2 };
        if (options.maxTokens) payload.generationConfig.maxOutputTokens = options.maxTokens;
        if (/^gemini-2\.5-/i.test(model)) {
          payload.generationConfig.thinkingConfig = { thinkingBudget: 0 };
        }
      }
      const resp = await fetchWithTimeout(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        }
      );
      const data = await resp.json().catch(() => ({}));
      if (resp.ok) {
        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
        if (text) {
          localStorage.setItem('azurepulse_working_model', model);
          return { ok: true, text, model };
        }
      }
      const errMsg = data?.error?.message || `HTTP ${resp.status}`;
      lastError = `[${model}] ${errMsg}`;
      if (resp.status === 401 || resp.status === 403 || /api key not valid|invalid api key/i.test(errMsg)) {
        keyInvalid = true;
        break;
      }
    } catch (err) {
      lastError = err.message || 'Lỗi mạng khi gọi Google AI Studio';
    }
  }

  // Auto-discover available models for this key if preset models failed
  if (!keyInvalid) {
    try {
      const listResp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(apiKey)}`);
      const listData = await listResp.json().catch(() => ({}));
      if (listResp.ok && Array.isArray(listData.models)) {
        const rankModel = (name) => {
          if (/gemini-2\.5-flash/i.test(name)) return 1;
          if (/gemini-2\.0-flash/i.test(name)) return 2;
          if (/gemini-flash/i.test(name)) return 3;
          if (/gemma-3-27b/i.test(name)) return 4;
          if (/gemma-3-12b|gemma-3-4b/i.test(name)) return 5;
          if (/pro/i.test(name)) return 99;
          return 8;
        };
        const discovered = listData.models
          .filter(m => Array.isArray(m.supportedGenerationMethods) && m.supportedGenerationMethods.includes('generateContent'))
          .map(m => String(m.name || '').replace(/^models\//, ''))
          .filter(m => m && !models.includes(m) && !/embedding|imagen|veo|tts|audio|robotics|computer-use|aqa|pro-latest|3\.1-pro/i.test(m))
          .sort((a, b) => rankModel(a) - rankModel(b));

        for (const model of discovered.slice(0, 3)) {
          try {
            const payload = { contents: [{ parts: [{ text: prompt }] }] };
            if (options.fast && /^gemini-2\.5-/i.test(model)) {
              payload.generationConfig = { temperature: 0.2, thinkingConfig: { thinkingBudget: 0 } };
            }
            const resp = await fetchWithTimeout(
              `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`,
              {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
              }
            );
            const data = await resp.json().catch(() => ({}));
            if (resp.ok) {
              const text = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
              if (text) {
                localStorage.setItem('azurepulse_working_model', model);
                return { ok: true, text, model };
              }
            } else if (data?.error?.message) {
              lastError = `[${model}] ${data.error.message}`;
            }
          } catch (e) { /* try next */ }
        }
      } else if (listData?.error?.message) {
        lastError = listData.error.message;
      }
    } catch (e) { /* keep lastError */ }
  }

  return { ok: false, error: lastError };
}

async function reviseExecutiveReportWithAI(comment, analysis) {
  const apiKey = getAgentApiKey();
  if (apiKey.length <= 10 || !analysis) return { ok: false, error: 'Chưa liên kết API Key' };

  const ctx = analysis.businessContext || {};
  const dataSnapshot = {
    company: ctx.companyName,
    industry: ctx.industry,
    objective: ctx.objective,
    totalRows: analysis.totalRows,
    healthScore: analysis.healthScore,
    columns: analysis.colProfiles.map(c => ({
      name: c.name, type: c.type, sum: c.sum, mean: c.mean, min: c.min, max: c.max, missing: c.missing
    })),
    categoryBreakdown: (analysis.categoryBreakdown || []).slice(0, 10),
    secondaryBreakdown: (analysis.secondaryBreakdown || []).slice(0, 8),
    trendSeries: (analysis.trendSeries || []).slice(0, 15),
    anomaliesCount: (analysis.anomalyRecords || []).length,
    sampleRows: (analysis.rows || []).slice(0, 5)
  };

  const currentReport = analysis.executiveReport?.directAnswer || '';
  const prompt = `Bạn là Chuyên gia Phân tích Kinh doanh (Business Analyst).
Dữ liệu thực tế của doanh nghiệp:
${JSON.stringify(dataSnapshot)}

Nội dung 5 mục phân tích hiện tại:
${currentReport}

Nhận xét / Yêu cầu chỉnh sửa bằng ngôn ngữ tự nhiên của người dùng:
"${comment}"

Hãy thực hiện CHỈNH SỬA TRỰC TIẾP nội dung phân tích theo đúng yêu cầu của người dùng (CHỈ dùng số liệu có thật trong dữ liệu thực tế ở trên, tuyệt đối không bịa số; giữ nguyên cấu trúc 5 tiêu đề dạng "**1. Tóm tắt điều hành**", "**2. Phân tích theo chiều ngang (so sánh qua các kỳ)**", "**3. Phân tích theo chiều dọc (cơ cấu)**", "**4. Phân tích các nhóm chỉ số cốt lõi**", "**5. Nguyên nhân & đề xuất giải pháp**").
Nếu yêu cầu của người dùng có bao gồm lọc dòng/xóa cột/đổi trục phân tích mà hệ thống chưa lọc, hãy ghi thêm chuỗi lệnh chuẩn vào "structuralCommands" (VD: "chỉ TikTok Shop" hoặc "xóa cột ID" hoặc "phân tích theo Khu_Vuc"), nếu không cần thì để "".

Trả về DUY NHẤT một JSON hợp lệ (không markdown \`\`\`json) theo mẫu:
{
  "structuralCommands": "",
  "updatedDirectAnswer": "**1. Tóm tắt điều hành**\\n...",
  "summaryOfChanges": "Mô tả ngắn 1 câu đã sửa trực tiếp phần nào."
}`;

  const ai = await callGeminiAPI(prompt, null, { fast: true, timeoutMs: 9000 });
  if (!ai.ok) return { ok: false, error: ai.error };

  const rawText = String(ai.text || '').trim();
  const cleaned = rawText.replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/i, '').trim();

  // Tier 1: Strict JSON parse
  try {
    const jsonMatch = cleaned.match(/\{[\s\S]*\}/);
    const parsed = JSON.parse(jsonMatch ? jsonMatch[0] : cleaned);
    if (parsed && parsed.updatedDirectAnswer) {
      return {
        ok: true,
        model: ai.model,
        structuralCommands: String(parsed.structuralCommands || '').trim(),
        updatedDirectAnswer: String(parsed.updatedDirectAnswer).trim(),
        summaryOfChanges: String(parsed.summaryOfChanges || 'Đã chỉnh sửa trực tiếp nội dung phân tích theo nhận xét.').trim()
      };
    }
  } catch (e) { /* fall through to tolerant extraction */ }

  // Tier 2: Tolerant extraction when AI leaves literal newlines inside JSON string values
  const ansMatch = cleaned.match(/"updatedDirectAnswer"\s*:\s*"([\s\S]*?)"\s*(?:,\s*"(?:summaryOfChanges|structuralCommands)"|\})/);
  if (ansMatch && ansMatch[1]) {
    const sumMatch = cleaned.match(/"summaryOfChanges"\s*:\s*"([\s\S]*?)"\s*(?:,|\})/);
    const cmdMatch = cleaned.match(/"structuralCommands"\s*:\s*"([\s\S]*?)"\s*(?:,|\})/);
    const unescapeStr = s => s.replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\\\/g, '\\').trim();
    return {
      ok: true,
      model: ai.model,
      structuralCommands: cmdMatch ? unescapeStr(cmdMatch[1]) : '',
      updatedDirectAnswer: unescapeStr(ansMatch[1]),
      summaryOfChanges: sumMatch ? unescapeStr(sumMatch[1]) : 'Đã chỉnh sửa trực tiếp nội dung phân tích theo nhận xét.'
    };
  }

  // Tier 3: Plain markdown / text response fallback (when AI replies directly without JSON)
  if (/1\.\s*Tóm tắt|2\.\s*Phân tích|Tóm tắt điều hành/i.test(cleaned)) {
    const normalized = cleaned
      .replace(/^#{1,4}\s*(\*{0,2}[1-5]\.[^\n]+?)\*{0,2}$/gm, '**$1**')
      .replace(/^([1-5]\.\s+[^\n]+)$/gm, '**$1**')
      .replace(/\*\*\*\*/g, '**')
      .trim();
    return {
      ok: true,
      model: ai.model,
      structuralCommands: '',
      updatedDirectAnswer: normalized,
      summaryOfChanges: 'Đã chỉnh sửa trực tiếp nội dung phân tích theo nhận xét.'
    };
  }

  return { ok: false, error: 'AI trả về nội dung chưa đúng cấu trúc 5 mục.' };
}

async function applyHumanCleaningInstructionsAsync(rows, instructionText) {
  const localRes = applyHumanCleaningInstructions(rows, instructionText);
  if (localRes.matched) return localRes;

  const apiKey = getAgentApiKey();
  if (apiKey.length > 10 && rows.length) {
    const cols = Object.keys(rows[0]);
    const sample = rows.slice(0, 3);
    const catValues = {};
    cols.forEach(c => {
      const uniq = Array.from(new Set(rows.map(r => String(r[c] ?? '').trim()).filter(Boolean)));
      if (uniq.length > 0 && uniq.length <= 20) catValues[c] = uniq;
    });
    const prompt = `Bạn là Data Engineer. Bảng có các cột: ${JSON.stringify(cols)}. Các giá trị phân loại hiện có: ${JSON.stringify(catValues)}. Mẫu 3 dòng: ${JSON.stringify(sample)}.
Người dùng yêu cầu: "${instructionText}".
Hãy chuyển yêu cầu thành 1 hoặc nhiều lệnh chuẩn cách nhau bằng dấu chấm phẩy (;), CHỈ dùng các cú pháp sau:
- xóa cột <ten_cot>
- đổi tên cột <cu> thành <moi>
- thêm cột <moi> = <cotA> - <cotB> (hoặc + * /)
- nếu <cot> <op> <gia_tri> thì sửa <cot_dich> thành <gia_tri_moi>
- gộp cột <A> và <B> thành <C>
- tách cột <A> theo <ky_tu> thành <B>, <C>
- bỏ chữ <chuoi> trong cột <cot>
- thêm tiền tố <chuoi> cho cột <cot>
- chuyển cột <cot> sang tháng
- xóa ngoại lai của <cot>
- xóa giá trị âm
- xóa dòng số <1, 2>
- sửa dòng <n> cột <cot> thành <gia_tri>
- xóa <gia_tri> | giữ <gia_tri> | sửa <cu> thành <moi>
- xóa <cot> < <so> | giữ <cot> >= <so>
- sắp xếp theo <cot> giảm dần | viết hoa cột <cot> | xóa trùng theo <cot>
Chỉ trả về chuỗi lệnh, không giải thích, không markdown.`;

    const ai = await callGeminiAPI(prompt, null, { fast: true, timeoutMs: 6000, maxTokens: 200 });
    if (ai.ok) {
      const cleanedCmd = ai.text.replace(/```[a-z]*\n?/gi, '').replace(/```/g, '').trim();
      const aiRes = applyHumanCleaningInstructions(rows, cleanedCmd);
      if (aiRes.matched) return aiRes;
    } else {
      return { ...localRes, apiError: ai.error };
    }
  }

  return localRes;
}

async function answerDataQuestion(question, analysis, mode = 'analyst') {
  const q = question.toLowerCase().trim();
  if (!analysis) {
    return 'Hiện chưa có dữ liệu nào được phân tích. Vui lòng điền Bối cảnh Doanh nghiệp và tải file dữ liệu ở bước Nạp dữ liệu nhé!';
  }

  const ctx = analysis.businessContext || {};
  const apiKey = getAgentApiKey();
  let apiErrorNotice = '';

  if (apiKey.length > 10) {
    const contextSummary = {
      businessContext: ctx,
      dataset: analysis.datasetName,
      rowsCount: analysis.totalRows,
      columns: analysis.colProfiles.map(c => ({
        name: c.name, type: c.type, missing: c.missing, sum: c.sum, mean: c.mean, median: c.median, min: c.min, max: c.max, top: c.topCategory
      })),
      groupBreakdown: analysis.categoryBreakdown.slice(0, 10),
      trendSeries: analysis.trendSeries.slice(0, 15),
      anomalies: analysis.anomalyRecords.slice(0, 8),
      sampleRows: analysis.rows.slice(0, 5),
      executiveAnswer: analysis.executiveReport?.directAnswer
    };
    const prompt = `Bạn là AzurePulse AI (${mode}), chuyên gia phân tích dữ liệu & cố vấn kinh doanh cho "${ctx.companyName || 'Doanh nghiệp'}" (${ctx.industry || ''}), mục tiêu: "${ctx.objective || ''}".
Hãy trả lời câu hỏi tự nhiên dưới đây một cách sâu sắc, chính xác, có dẫn chứng số liệu cụ thể bằng tiếng Việt dựa trên dữ liệu thực tế sau:
${JSON.stringify(contextSummary)}

Câu hỏi người dùng: ${question}`;

    const ai = await callGeminiAPI(prompt, null, { fast: true, timeoutMs: 6000, maxTokens: 200 });
    if (ai.ok) return ai.text;
    apiErrorNotice = `⚠️ *(Google AI Studio API lỗi: ${ai.error}. Đang dùng bộ phân tích nội bộ)*\n\n`;
  }

  const pm = analysis.primaryMetric;
  if (/bối cảnh|mục tiêu|quản trị|trả lời|quyết định/.test(q)) {
    return analysis.executiveReport?.directAnswer || 'Đã tổng hợp báo cáo quản trị trong tab Báo cáo Quản trị.';
  }
  if (/tổng quan|tóm tắt|summary|overview/.test(q)) {
    return `📊 **Tóm tắt cho ${ctx.companyName || 'Doanh nghiệp'} (${analysis.datasetName})**:\n- Quy mô: **${analysis.totalRows} dòng** × **${analysis.totalCols} cột** (Health: **${analysis.healthScore}/100**).\n- ${pm ? `Tổng **${pm.name}**: **${formatNumberVN(pm.sum, true)}** (TB: ${formatNumberVN(pm.mean, true)}).` : ''}\n- Nhóm dẫn đầu: **${analysis.categoryBreakdown[0]?.label || '—'}** (Top ${Math.max(1, Math.ceil(analysis.categoryBreakdown.length * 0.3))} nhóm chiếm **${analysis.topNShare.toFixed(1)}%**).`;
  }
  if (/bất thường|ngoại lai|rủi ro|outlier|thiếu|lỗi|làm sạch/.test(q)) {
    const anomStr = analysis.anomalyRecords.slice(0, 3).map(a => `• Dòng ${a.rowIndex} (${a.contextLabel}): ${a.column} = ${formatNumberVN(a.value, true)} (${a.direction})`).join('\n');
    return `⚠️ **Phát hiện rủi ro & chất lượng dữ liệu**:\n- Ô thiếu: **${analysis.totalMissingCells}** | Trùng lặp: **${analysis.duplicateCount}** | Ngoại lai: **${analysis.anomalyRecords.length}**\n${anomStr || 'Không có điểm ngoại lai nghiêm trọng.'}`;
  }
  if (/cao nhất|top|dẫn đầu|lớn nhất|tốt nhất/.test(q) && analysis.categoryBreakdown.length) {
    const top3 = analysis.categoryBreakdown.slice(0, 3)
      .map((item, i) => `${i + 1}. **${item.label}**: ${formatNumberVN(item.primarySum, true)}${item.marginPct !== null ? ` (Biên: ${item.marginPct.toFixed(1)}%)` : ''}`)
      .join('\n');
    return `🏆 **Top ${analysis.groupDim?.name} theo ${pm?.name}**:\n${top3}`;
  }
  if (/đề xuất|giải pháp|hành động|nên làm/.test(q)) {
    return analysis.insights.slice(0, 3).map(i => `• **[${i.tag}]**: ${i.action}`).join('\n');
  }

  const matchedCol = analysis.colProfiles.find(c => q.includes(c.name.toLowerCase()));
  if (matchedCol) {
    if (matchedCol.type === 'number') {
      return `📈 Thống kê **${matchedCol.name}**: Tổng **${formatNumberVN(matchedCol.sum, true)}** | TB **${formatNumberVN(matchedCol.mean, true)}** | Min **${formatNumberVN(matchedCol.min, true)}** | Max **${formatNumberVN(matchedCol.max, true)}** | Ngoại lai: ${matchedCol.outliers}`;
    }
    return `🏷️ Cột **${matchedCol.name}** có **${matchedCol.uniqueCount}** nhóm. Phổ biến nhất: **${matchedCol.topCategory?.label}** (${matchedCol.topCategory?.count} dòng).`;
  }

  return `${apiErrorNotice}Tôi đang phân tích dữ liệu cho **${ctx.companyName || analysis.datasetName}** (Mục tiêu: ${ctx.objective || 'BI'}). Bạn có thể hỏi: *"Trả lời câu hỏi quản trị"*, *"Top dẫn đầu"*, *"Điểm bất thường & rủi ro"*, hoặc *"Đề xuất hành động"*.`;
}
