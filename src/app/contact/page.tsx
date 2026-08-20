'use client';

import React, { useState } from 'react';
import { 
  Car, Bike, Wrench, CheckCircle2, Wallet, 
  FileText, Moon, Sun, AlertCircle, Camera, Hash, Fuel, Info, ChevronRight, ArrowLeft, Gauge, ClipboardList, History, ShieldAlert, CheckSquare, Square, CreditCard, PhoneCall, Clock, Stethoscope, Plus, Trash2, LayoutDashboard, BarChart3 
} from 'lucide-react';

export default function GarasiHarianChartUI() {
  const [currentView, setCurrentView] = useState<'main-menu' | 'sub-menu' | 'dashboard' | 'detail-view'>('main-menu');
  const [activeVehicle, setActiveVehicle] = useState<'Mobil' | 'Motor'>('Mobil');
  const [activeModule, setActiveModule] = useState<
    'official-detail' | 'odometer-log' | 'sparepart-status' | 'service-history' | 'expense-tracker' | 'emergency-docs' | 'periodic-checklist' | 'driver-license' | 'time-oil-reminder' | 'troubleshoot-log'
  >('official-detail');
  
  const [isDarkMode, setIsDarkMode] = useState(true);

  const [vehicleImages, setVehicleImages] = useState({
    Mobil: null as string | null,
    Motor: null as string | null,
  });

  const [vehicleInfo, setVehicleInfo] = useState({
    Mobil: {
      plate: 'D 1234 ABC',
      color: 'Hitam Metalik',
      year: '2022',
      stnkDate: '2026-09-12',
      avgDailyKm: 35,
      vin: 'MHAFB123456789',
      engineNo: 'B123E-456789',
      model: 'Minibus / Avanza',
      cc: '1500 cc',
      fuel: 'Bensin',
      owner: 'Budi Santoso',
      insurance: 'PT Asuransi Mobilku (Polis: POL-987654)',
      towingNumber: '0811-2233-4455',
      docLocation: 'Brankas Kamar Utama (Laci Atas)'
    },
    Motor: {
      plate: 'F 5678 XYZ',
      color: 'Putih Mutiara',
      year: '2024',
      stnkDate: '2027-03-24',
      avgDailyKm: 20,
      vin: 'MH1JM3456789',
      engineNo: 'JM34E-987654',
      model: 'Sepeda Motor Solo',
      cc: '160 cc',
      fuel: 'Bensin',
      owner: 'Budi Santoso',
      insurance: 'Asuransi Motor Aman (Polis: MOT-112233)',
      towingNumber: '0812-3344-5566',
      docLocation: 'Kotak Khusus Dokumen Kendaraan'
    }
  });

  const [symptoms, setSymptoms] = useState([
    { id: 1, vehicle: 'Mobil', title: 'Stir bergetar di kecepatan 80 km/jam', severity: 'Sedang', status: 'Belum Diperbaiki', date: '10 Agu 2026', note: 'Kemungkinan perlu balancing roda depan atau spooring.' },
    { id: 2, vehicle: 'Mobil', title: 'Rem berdecit halus saat pagi hari', severity: 'Ringan', status: 'Dalam Pantauan', date: '02 Agu 2026', note: 'Biasanya karena embun pagi menempel di piringan cakram.' },
    { id: 3, vehicle: 'Motor', title: 'Tarikan gas awal agak tersendat', severity: 'Sedang', status: 'Belum Diperbaiki', date: '14 Agu 2026', note: 'Cek kebersihan filter udara atau CVT.' },
  ]);

  const [newSymptomTitle, setNewSymptomTitle] = useState('');
  const [newSymptomSeverity, setNewSymptomSeverity] = useState('Ringan');
  const [newSymptomNote, setNewSymptomNote] = useState('');

  const handleAddSymptom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSymptomTitle.trim()) return;

    const todayStr = new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
    const newItem = {
      id: Date.now(),
      vehicle: activeVehicle,
      title: newSymptomTitle,
      severity: newSymptomSeverity,
      status: 'Belum Diperbaiki',
      date: todayStr,
      note: newSymptomNote || 'Tidak ada catatan tambahan.'
    };

    setSymptoms([newItem, ...symptoms]);
    setNewSymptomTitle('');
    setNewSymptomNote('');
  };

  const handleDeleteSymptom = (id: number) => {
    setSymptoms(symptoms.filter(s => s.id !== id));
  };

  const toggleSymptomStatus = (id: number) => {
    setSymptoms(symptoms.map(s => {
      if (s.id === id) {
        const nextStatus = s.status === 'Belum Diperbaiki' ? 'Selesai Diperbaiki' : 'Belum Diperbaiki';
        return { ...s, status: nextStatus };
      }
      return s;
    }));
  };

  const [timeOilReminders, setTimeOilReminders] = useState([
    { id: 1, vehicle: 'Mobil', name: 'Oli Mesin (Waktu)', lastDate: '2026-03-12', maxMonths: 6, note: 'Batas waktu 6 bulan meskipun KM belum tercapai' },
    { id: 2, vehicle: 'Motor', name: 'Oli Mesin Matic (Waktu)', lastDate: '2026-05-15', maxMonths: 4, note: 'Batas waktu 4 bulan untuk penggunaan harian berat' },
  ]);

  const [driverLicenses, setDriverLicenses] = useState([
    { id: 1, type: 'SIM A (Mobil)', number: '3212-xxxx-xxxx1', expiryDate: '2027-11-15' },
    { id: 2, type: 'SIM C (Motor)', number: '3212-xxxx-xxxx2', expiryDate: '2026-10-20' },
  ]);

  const [serviceChecklist, setServiceChecklist] = useState([
    { id: 1, vehicle: 'Mobil', package: 'Servis Berkala 10.000 KM', item: 'Ganti Oli Mesin & Filter Oli', checked: true },
    { id: 2, vehicle: 'Mobil', package: 'Servis Berkala 10.000 KM', item: 'Pembersihan Filter Udara', checked: true },
    { id: 3, vehicle: 'Mobil', package: 'Servis Berkala 10.000 KM', item: 'Pengecekan Ketebalan Kampas Rem', checked: false },
    { id: 4, vehicle: 'Mobil', package: 'Servis Berkala 10.000 KM', item: 'Pengecekan Tekanan & Rotasi Ban', checked: false },
    { id: 5, vehicle: 'Motor', package: 'Servis Berkala 5.000 KM', item: 'Ganti Oli Mesin & Oli Gardan', checked: true },
    { id: 6, vehicle: 'Motor', package: 'Servis Berkala 5.000 KM', item: 'Pengecekan Sistem Pengapian & Busi', checked: false },
    { id: 7, vehicle: 'Motor', package: 'Servis Berkala 5.000 KM', item: 'Pengecekan Rem Depan & Belakang', checked: true },
  ]);

  const [odometer, setOdometer] = useState({
    Mobil: 48000,
    Motor: 14500
  });

  const [parts, setParts] = useState([
    { id: 1, vehicle: 'Mobil', name: 'Oli Mesin', lastService: 40000, maxLife: 10000, lastDate: '12 Jan 2026', price: 'Rp 450.000' },
    { id: 2, vehicle: 'Mobil', name: 'Filter Oli', lastService: 40000, maxLife: 20000, lastDate: '12 Jan 2026', price: 'Rp 85.000' },
    { id: 3, vehicle: 'Mobil', name: 'Kampas Rem Depan', lastService: 33500, maxLife: 15000, lastDate: '05 Ags 2025', price: 'Rp 320.000' },
    { id: 4, vehicle: 'Motor', name: 'Oli Mesin Matic', lastService: 12000, maxLife: 3000, lastDate: '20 Jul 2026', price: 'Rp 65.000' },
    { id: 5, vehicle: 'Motor', name: 'Oli Gardan', lastService: 8000, maxLife: 8000, lastDate: '10 Feb 2026', price: 'Rp 25.000' },
    { id: 6, vehicle: 'Motor', name: 'Busi Motor', lastService: 10000, maxLife: 8000, lastDate: '15 Mei 2026', price: 'Rp 35.000' },
  ]);

  const [serviceHistories, setServiceHistories] = useState([
    { id: 1, vehicle: 'Mobil', partName: 'Oli Mesin & Filter Oli', date: '12 Jan 2026', km: 40000, mechanicNotes: 'Penggantian rutin di Bengkel Resmi.', cost: 'Rp 535.000' },
    { id: 2, vehicle: 'Mobil', partName: 'Kampas Rem Depan', date: '05 Ags 2025', km: 33500, mechanicNotes: 'Ketebalan kampas tersisa 15%.', cost: 'Rp 320.000' },
    { id: 3, vehicle: 'Motor', partName: 'Oli Mesin Matic', date: '20 Jul 2026', km: 12000, mechanicNotes: 'Ganti oli berkala.', cost: 'Rp 65.000' },
  ]);

  const handleOdoChange = (newVal: string) => {
    setOdometer({ ...odometer, [activeVehicle]: Number(newVal) });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setVehicleImages({ ...vehicleImages, [activeVehicle]: imageUrl });
    }
  };

  const handleService = (partId: number, partName: string, priceStr: string) => {
    const today = new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
    const currentKm = odometer[activeVehicle];
    
    setParts(parts.map(part => part.id === partId ? { ...part, lastService: currentKm, lastDate: today } : part));

    const newHistory = {
      id: Date.now(),
      vehicle: activeVehicle,
      partName: partName,
      date: today,
      km: currentKm,
      mechanicNotes: 'Penggantian komponen berkala berhasil dicatat dari sistem.',
      cost: priceStr
    };
    setServiceHistories([newHistory, ...serviceHistories]);
  };

  const handleResetTimeOil = (id: number) => {
    const todayStr = new Date().toISOString().split('T')[0];
    setTimeOilReminders(timeOilReminders.map(item => item.id === id ? { ...item, lastDate: todayStr } : item));
  };

  const toggleChecklist = (id: number) => {
    setServiceChecklist(serviceChecklist.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  const getCountdownDays = (dateString: string) => {
    const targetDate = new Date(dateString);
    const today = new Date();
    return Math.ceil((targetDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  };

  const getTimeOilStatus = (lastDateStr: string, maxMonths: number) => {
    const lastDate = new Date(lastDateStr);
    const targetDate = new Date(lastDate);
    targetDate.setMonth(targetDate.getMonth() + maxMonths);
    
    const today = new Date();
    const diffTime = targetDate.getTime() - today.getTime();
    const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const targetDateStr = targetDate.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });

    return { daysLeft, targetDateStr };
  };

  const getPredictedDate = (remainingKm: number, dailyKm: number) => {
    if (dailyKm <= 0 || remainingKm <= 0) return 'Segera Ganti';
    const daysLeft = Math.ceil(remainingKm / dailyKm);
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + daysLeft);
    return targetDate.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  const getHealthStatus = (lastService: number, maxLife: number, currentOdo: number) => {
    const usage = currentOdo - lastService;
    const remaining = maxLife - usage;
    const percentage = Math.max(0, Math.min(100, (remaining / maxLife) * 100));

    let color = 'bg-emerald-500';
    let textColor = 'text-emerald-400';
    let ringColor = 'ring-emerald-500/30';

    if (percentage <= 25 && percentage > 0) {
      color = 'bg-amber-400';
      textColor = 'text-amber-400';
      ringColor = 'ring-amber-500/30';
    } else if (percentage === 0 || usage >= maxLife) {
      color = 'bg-rose-500';
      textColor = 'text-rose-400';
      ringColor = 'ring-rose-500/30';
    }

    return { percentage, color, textColor, ringColor, remaining, usage };
  };

  const filteredParts = parts.filter(part => part.vehicle === activeVehicle);
  const filteredHistory = serviceHistories.filter(h => h.vehicle === activeVehicle);
  const filteredChecklist = serviceChecklist.filter(item => item.vehicle === activeVehicle);
  const filteredTimeOil = timeOilReminders.filter(item => item.vehicle === activeVehicle);
  const filteredSymptoms = symptoms.filter(s => s.vehicle === activeVehicle);
  const currentInfo = vehicleInfo[activeVehicle];
  const stnkDaysLeft = getCountdownDays(currentInfo.stnkDate);
  const currentImage = vehicleImages[activeVehicle];

  return (
    <div className={`min-h-screen pt-32 pb-16 px-4 flex flex-col items-center font-sans transition-colors duration-300 ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
      
      <div className="w-full max-w-xl flex flex-col items-center">
        
        {currentView === 'main-menu' && (
          <div className="w-full flex flex-col items-center animate-fade-in">
            <header className="flex flex-col items-center text-center mb-10 w-full relative">
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="absolute right-0 top-0 p-3 rounded-2xl bg-white/10 dark:bg-slate-900 shadow-lg ring-1 ring-slate-200/20 dark:ring-slate-800 text-slate-600 dark:text-slate-300 backdrop-blur-md"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <h1 className="text-4xl font-black tracking-tight mb-2 bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">Garasi Harian</h1>
              <p className="text-sm text-slate-400">
                Pilih kendaraan untuk melihat visualisasi chart analitik dan pengelolaan penuh.
              </p>
            </header>

            <div className="w-full space-y-4">
              <div 
                onClick={() => { setActiveVehicle('Mobil'); setCurrentView('dashboard'); }}
                className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl ring-1 ring-slate-200/50 dark:ring-slate-800/80 flex items-center justify-between cursor-pointer hover:ring-indigo-500 hover:scale-[1.02] transition-all group"
              >
                <div className="flex items-center space-x-5">
                  <div className="p-4 bg-gradient-to-br from-indigo-500 to-violet-600 text-white rounded-2xl shadow-md shadow-indigo-500/30">
                    <Car size={32} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Mobil</h2>
                    <p className="text-xs text-slate-400 mt-0.5">{vehicleInfo.Mobil.plate} • {vehicleInfo.Mobil.model}</p>
                  </div>
                </div>
                <div className="p-3 bg-slate-100 dark:bg-slate-800/80 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <ChevronRight size={20} />
                </div>
              </div>

              <div 
                onClick={() => { setActiveVehicle('Motor'); setCurrentView('dashboard'); }}
                className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl ring-1 ring-slate-200/50 dark:ring-slate-800/80 flex items-center justify-between cursor-pointer hover:ring-indigo-500 hover:scale-[1.02] transition-all group"
              >
                <div className="flex items-center space-x-5">
                  <div className="p-4 bg-gradient-to-br from-indigo-500 to-violet-600 text-white rounded-2xl shadow-md shadow-indigo-500/30">
                    <Bike size={32} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Motor</h2>
                    <p className="text-xs text-slate-400 mt-0.5">{vehicleInfo.Motor.plate} • {vehicleInfo.Motor.model}</p>
                  </div>
                </div>
                <div className="p-3 bg-slate-100 dark:bg-slate-800/80 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <ChevronRight size={20} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================================================= */}
        {/* DASHBOARD UTAMA DENGAN VISUALISASI CHART          */}
        {/* ================================================= */}
        {currentView === 'dashboard' && (
          <div className="w-full flex flex-col items-center animate-fade-in space-y-5">
            
            <div className="w-full flex items-center justify-between mb-2">
              <button 
                onClick={() => setCurrentView('main-menu')}
                className="flex items-center text-sm font-semibold text-indigo-400 bg-indigo-500/10 px-4 py-2.5 rounded-2xl border border-indigo-500/20 transition-transform active:scale-95"
              >
                <ArrowLeft size={16} className="mr-2" /> Ganti Kendaraan
              </button>

              <button 
                onClick={() => setCurrentView('sub-menu')}
                className="flex items-center text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-2.5 rounded-2xl shadow-lg transition-transform active:scale-95"
              >
                <LayoutDashboard size={14} className="mr-1.5" /> Semua Menu
              </button>
            </div>

            {/* 1. KARTU IDENTITAS KENDARAAN (HERO CARD) */}
            <section className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl ring-1 ring-slate-200/50 dark:ring-slate-800/80 flex flex-col items-center text-center relative overflow-hidden">
              <div className="w-full h-36 rounded-2xl bg-slate-800 overflow-hidden relative flex items-center justify-center mb-4 border border-slate-700">
                {currentImage ? (
                  <img src={currentImage} alt="Kendaraan" className="w-full h-full object-cover" />
                ) : (
                  <div className="flex flex-col items-center text-slate-400">
                    {activeVehicle === 'Mobil' ? <Car size={40} strokeWidth={1} /> : <Bike size={40} strokeWidth={1} />}
                    <span className="text-[11px] mt-1 font-medium">Belum ada foto</span>
                  </div>
                )}
              </div>

              <h2 className="text-2xl font-black tracking-wide">{currentInfo.plate}</h2>
              <p className="text-xs text-slate-400 mt-0.5">{currentInfo.model} • Tahun {currentInfo.year}</p>

              <div className="w-full mt-4 p-4 bg-slate-800/60 rounded-2xl flex justify-between items-center border border-slate-700/50">
                <div className="text-left">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Odometer Terkini</span>
                  <p className="text-lg font-extrabold text-indigo-400">{odometer[activeVehicle].toLocaleString()} KM</p>
                </div>
                <button 
                  onClick={() => { setActiveModule('odometer-log'); setCurrentView('detail-view'); }}
                  className="px-3 py-1.5 bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 rounded-xl text-xs font-bold hover:bg-indigo-500/20"
                >
                  Perbarui
                </button>
              </div>
            </section>

            {/* 2. CUSTOM SVG CHART: VISUALISASI PENGELUARAN BULANAN (BAR CHART) */}
            <section className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl ring-1 ring-slate-200/50 dark:ring-slate-800/80 space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <BarChart3 size={16} className="text-indigo-400" />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Grafik Biaya Servis (6 Bulan)</span>
                </div>
                <span className="text-xs font-semibold text-indigo-400">Total: Rp 920rb</span>
              </div>

              {/* Batang Chart Interaktif */}
              <div className="w-full h-40 flex items-end justify-between px-2 pt-6 pb-2 border-b border-slate-800">
                {[
                  { month: 'Mar', amount: 320000, height: '60%' },
                  { month: 'Apr', amount: 0, height: '10%' },
                  { month: 'Mei', amount: 150000, height: '35%' },
                  { month: 'Jun', amount: 0, height: '10%' },
                  { month: 'Jul', amount: 85000, height: '25%' },
                  { month: 'Agu', amount: 365000, height: '85%' },
                ].map((bar, i) => (
                  <div key={i} className="flex flex-col items-center space-y-2 group relative">
                    {/* Tooltip Hover */}
                    <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-[10px] py-1 px-2 rounded-lg border border-slate-700 pointer-events-none whitespace-nowrap shadow-lg">
                      Rp {(bar.amount / 1000).toLocaleString()}rb
                    </div>
                    
                    <div className="w-8 bg-slate-800/80 rounded-t-xl h-full flex items-end overflow-hidden p-1">
                      <div 
                        className="w-full bg-gradient-to-t from-indigo-600 to-violet-500 rounded-t-lg transition-all duration-700 group-hover:from-indigo-500 group-hover:to-cyan-400" 
                        style={{ height: bar.height }} 
                      />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400">{bar.month}</span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-slate-400 text-center">Arahkan kursor pada batang grafik untuk melihat detail nominal pengeluaran.</p>
            </section>

            {/* 3. SMART ALERT BANNER */}
            <section className="w-full bg-gradient-to-r from-amber-500/10 to-rose-500/10 border border-amber-500/20 rounded-3xl p-5 flex items-start space-x-3 shadow-md">
              <AlertCircle size={20} className="text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs space-y-1">
                <strong className="font-bold text-amber-300">Peringatan Penting!</strong>
                <p className="text-slate-300">
                  {stnkDaysLeft <= 30 ? `Pajak STNK akan jatuh tempo dalam ${stnkDaysLeft} hari!` : 'Pajak STNK dan kondisi kendaraan terpantau aman.'}
                  {filteredSymptoms.filter(s => s.status === 'Belum Diperbaiki').length > 0 && ` Ada ${filteredSymptoms.filter(s => s.status === 'Belum Diperbaiki').length} keluhan gejala mesin belum diperbaiki.`}
                </p>
              </div>
            </section>

            {/* 4. RINGKASAN KESEHATAN SPAREPART UTAMA */}
            <section className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl ring-1 ring-slate-200/50 dark:ring-slate-800/80 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Kesehatan Komponen Vital</span>
                <button onClick={() => { setActiveModule('sparepart-status'); setCurrentView('detail-view'); }} className="text-xs font-semibold text-indigo-400 hover:underline">
                  Lihat Semua
                </button>
              </div>

              <div className="space-y-3">
                {filteredParts.slice(0, 3).map((part) => {
                  const status = getHealthStatus(part.lastService, part.maxLife, odometer[activeVehicle]);
                  return (
                    <div key={part.id} className="p-3.5 bg-slate-800/50 rounded-2xl border border-slate-700/40 space-y-2">
                      <div className="flex justify-between text-xs font-bold">
                        <span>{part.name}</span>
                        <span className={status.textColor}>Sisa {status.remaining.toLocaleString()} KM</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${status.color}`} style={{ width: `${status.percentage}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 5. WIDGET HITUNG MUNDUR DOKUMEN */}
            <section className="w-full grid grid-cols-2 gap-3">
              <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-4 shadow-xl ring-1 ring-slate-200/50 dark:ring-slate-800/80 text-center flex flex-col justify-between">
                <span className="text-[10px] uppercase font-bold text-slate-400">Pajak STNK</span>
                <p className={`text-sm font-black my-2 ${stnkDaysLeft <= 30 ? 'text-rose-400' : 'text-indigo-400'}`}>
                  {stnkDaysLeft > 0 ? `${stnkDaysLeft} Hari Lagi` : 'Jatuh Tempo!'}
                </p>
                <span className="text-[10px] text-slate-500">{currentInfo.stnkDate}</span>
              </div>

              <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-4 shadow-xl ring-1 ring-slate-200/50 dark:ring-slate-800/80 text-center flex flex-col justify-between">
                <span className="text-[10px] uppercase font-bold text-slate-400">SIM Pengemudi</span>
                <p className="text-sm font-black my-2 text-indigo-400">Aktif & Aman</p>
                <span className="text-[10px] text-slate-500">Terdaftar di Sistem</span>
              </div>
            </section>

          </div>
        )}

        {currentView === 'sub-menu' && (
          <div className="w-full flex flex-col items-center animate-fade-in">
            
            <div className="w-full flex items-center justify-between mb-8">
              <button 
                onClick={() => setCurrentView('dashboard')}
                className="flex items-center text-sm font-semibold text-indigo-400 bg-indigo-500/10 px-4 py-2.5 rounded-2xl border border-indigo-500/20 transition-transform active:scale-95"
              >
                <ArrowLeft size={16} className="mr-2" /> Kembali ke Dashboard
              </button>

              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-3 rounded-2xl bg-white/10 dark:bg-slate-900 shadow-lg ring-1 ring-slate-200/20 dark:ring-slate-800 text-slate-600 dark:text-slate-300 backdrop-blur-md"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-3xl font-black capitalize bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Semua Menu {activeVehicle}</h2>
              <p className="text-xs text-slate-400 mt-1">Pilih kategori pengelolaan di bawah ini</p>
            </div>

            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3.5">
              
              {[
                { id: 'official-detail', title: 'Detail Resmi', desc: 'STNK, BPKB, Plat, No. Rangka & Mesin', icon: FileText, gradient: 'from-blue-500 to-cyan-500' },
                { id: 'odometer-log', title: 'Pembaruan Odometer', desc: 'Catat kilometer kendaraan saat ini', icon: Gauge, gradient: 'from-emerald-500 to-teal-500' },
                { id: 'sparepart-status', title: 'Umur & Status Sparepart', desc: 'Kesehatan komponen, estimasi habis & biaya', icon: ClipboardList, gradient: 'from-violet-500 to-purple-500' },
                { id: 'troubleshoot-log', title: 'Detektor Gejala Masalah', desc: 'Catat keluhan dan gejala kejanggalan mesin', icon: Stethoscope, gradient: 'from-rose-500 to-pink-600' },
                { id: 'time-oil-reminder', title: 'Pengingat Oli (Berdasarkan Waktu)', desc: 'Batasan bulan ganti oli mesin kendaraan', icon: Clock, gradient: 'from-amber-500 to-yellow-600' },
                { id: 'periodic-checklist', title: 'Jadwal Perawatan Berkala', desc: 'Daftar periksa interaktif servis rutin', icon: CheckSquare, gradient: 'from-orange-500 to-red-500' },
                { id: 'service-history', title: 'Riwayat & Log Servis', desc: 'Arsip digital penggantian dan mekanik', icon: History, gradient: 'from-pink-500 to-rose-500' },
                { id: 'expense-tracker', title: 'Catat Biaya & Pengeluaran', desc: 'Rekapitulasi total biaya pemeliharaan', icon: Wallet, gradient: 'from-indigo-500 to-blue-600' },
                { id: 'driver-license', title: 'Pengingat SIM & Dokumen', desc: 'Hitung mundur masa berlaku SIM pengendara', icon: CreditCard, gradient: 'from-teal-500 to-emerald-600' },
                { id: 'emergency-docs', title: 'Dokumen & Kontak Darurat', desc: 'Nomor towing, asuransi, dan lokasi dokumen', icon: ShieldAlert, gradient: 'from-rose-500 to-red-600' },
              ].map((menu) => {
                const IconComponent = menu.icon;
                return (
                  <div 
                    key={menu.id}
                    onClick={() => { setActiveModule(menu.id as any); setCurrentView('detail-view'); }}
                    className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-4 shadow-xl ring-1 ring-slate-200/50 dark:ring-slate-800/80 flex items-center justify-between cursor-pointer hover:ring-2 hover:ring-indigo-500 hover:scale-[1.01] transition-all group relative overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundImage: `linear-gradient(to bottom, var(--tw-gradient-stops))` }} />
                    <div className="flex items-center space-x-4">
                      <div className={`p-3.5 bg-gradient-to-br ${menu.gradient} text-white rounded-2xl shadow-md`}>
                        <IconComponent size={22} strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold tracking-wide group-hover:text-indigo-400 transition-colors">{menu.title}</h3>
                        <p className="text-[11px] text-slate-400 mt-0.5">{menu.desc}</p>
                      </div>
                    </div>
                    <div className="p-2.5 bg-slate-100 dark:bg-slate-800/80 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <ChevronRight size={16} />
                    </div>
                  </div>
                );
              })}

            </div>
          </div>
        )}

        {currentView === 'detail-view' && (
          <div className="w-full flex flex-col items-center animate-fade-in">
            
            <div className="w-full flex items-center justify-between mb-6">
              <button 
                onClick={() => setCurrentView('sub-menu')}
                className="flex items-center text-sm font-semibold text-indigo-400 bg-indigo-500/10 px-4 py-2 rounded-2xl border border-indigo-500/20 transition-transform active:scale-95"
              >
                <ArrowLeft size={16} className="mr-2" /> Kembali ke Semua Menu
              </button>

              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-3 rounded-2xl bg-white/10 dark:bg-slate-900 shadow-lg ring-1 ring-slate-200/20 dark:ring-slate-800 text-slate-600 dark:text-slate-300 backdrop-blur-md"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {activeModule === 'official-detail' && (
              <div className="w-full flex flex-col items-center space-y-6">
                <section className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl shadow-xl ring-1 ring-slate-200/50 dark:ring-slate-800/80 p-4 flex flex-col items-center">
                  <div className="w-full h-48 rounded-2xl bg-slate-100 dark:bg-slate-800 overflow-hidden relative flex items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-700">
                    {currentImage ? (
                      <img src={currentImage} alt="Kendaraan" className="w-full h-full object-cover" />
                    ) : (
                      <div className="flex flex-col items-center text-slate-400">
                        {activeVehicle === 'Mobil' ? <Car size={48} strokeWidth={1} /> : <Bike size={48} strokeWidth={1} />}
                        <span className="text-xs mt-2 font-medium">Belum ada foto kendaraan</span>
                      </div>
                    )}
                    
                    <label className="absolute bottom-3 right-3 bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-xl text-xs font-semibold shadow-lg cursor-pointer flex items-center transition-transform active:scale-95">
                      <Camera size={14} className="mr-1.5" /> Unggah Foto
                      <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                    </label>
                  </div>
                </section>

                <section className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl shadow-xl ring-1 ring-slate-200/50 dark:ring-slate-800/80 p-6 flex flex-col items-center text-center">
                  <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-indigo-400 mb-4">
                    <FileText size={14} />
                    <span>Dokumen Resmi STNK / BPKB</span>
                  </div>
                  
                  <div className="text-2xl font-black tracking-wider bg-slate-100 dark:bg-slate-800 px-8 py-3 rounded-2xl mb-5 border border-slate-200 dark:border-slate-700">
                    {currentInfo.plate}
                  </div>

                  <div className="w-full grid grid-cols-2 gap-3 text-sm mb-4">
                    <div className="flex flex-col p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl text-left">
                      <span className="text-slate-400 text-[10px] uppercase">Pemilik</span>
                      <span className="font-semibold">{currentInfo.owner}</span>
                    </div>
                    <div className="flex flex-col p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl text-left">
                      <span className="text-slate-400 text-[10px] uppercase">Model / Tipe</span>
                      <span className="font-semibold">{currentInfo.model}</span>
                    </div>
                    <div className="flex flex-col p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl text-left">
                      <span className="text-slate-400 text-[10px] uppercase">Warna</span>
                      <span className="font-semibold">{currentInfo.color}</span>
                    </div>
                    <div className="flex flex-col p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl text-left">
                      <span className="text-slate-400 text-[10px] uppercase">Tahun</span>
                      <span className="font-semibold">{currentInfo.year}</span>
                    </div>
                    <div className="flex flex-col p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl text-left">
                      <span className="text-slate-400 text-[10px] uppercase">Bahan Bakar</span>
                      <span className="font-semibold flex items-center"><Fuel size={12} className="mr-1"/> {currentInfo.fuel}</span>
                    </div>
                    <div className="flex flex-col p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl text-left">
                      <span className="text-slate-400 text-[10px] uppercase">Kapasitas</span>
                      <span className="font-semibold">{currentInfo.cc}</span>
                    </div>
                  </div>

                  <div className="w-full p-4 bg-indigo-500/10 dark:bg-slate-800 rounded-2xl space-y-2 mb-4 border border-indigo-500/20">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400 flex items-center"><Hash size={12} className="mr-1"/> No. Rangka:</span>
                      <span className="font-mono font-bold">{currentInfo.vin}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400 flex items-center"><Info size={12} className="mr-1"/> No. Mesin:</span>
                      <span className="font-mono font-bold">{currentInfo.engineNo}</span>
                    </div>
                  </div>

                  <div className={`w-full p-3 rounded-2xl flex items-center justify-between text-xs font-medium ${stnkDaysLeft <= 30 ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'}`}>
                    <span className="flex items-center font-bold">
                      <AlertCircle size={14} className="mr-1.5" /> Pajak STNK: {currentInfo.stnkDate}
                    </span>
                    <span>
                      {stnkDaysLeft > 0 ? `${stnkDaysLeft} hari lagi` : 'Jatuh Tempo!'}
                    </span>
                  </div>
                </section>
              </div>
            )}

            {activeModule === 'odometer-log' && (
              <div className="w-full flex flex-col items-center space-y-6">
                <section className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl shadow-xl ring-1 ring-slate-200/50 dark:ring-slate-800/80 p-8 flex flex-col items-center text-center">
                  <div className="p-4 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-2xl mb-4 shadow-md shadow-emerald-500/30">
                    <Gauge size={36} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold mb-1">Perbarui Jarak Tempuh</h3>
                  <p className="text-xs text-slate-400 mb-6">Masukkan angka Odometer terbaru sesuai instrumen kendaraan</p>

                  <div className="flex items-baseline justify-center space-x-2 mb-6">
                    <input 
                      type="number" 
                      value={odometer[activeVehicle]}
                      onChange={(e) => handleOdoChange(e.target.value)}
                      className="text-5xl font-extrabold bg-transparent border-b-2 border-dashed border-slate-700 text-center focus:outline-none focus:border-indigo-500 w-60 pb-2 text-indigo-400"
                    />
                    <span className="text-xl font-semibold text-slate-400">KM</span>
                  </div>

                  <div className="w-full p-4 bg-slate-800/60 rounded-2xl text-xs text-slate-400 border border-slate-700/50">
                    💡 Perubahan odometer ini akan otomatis memperbarui perhitungan sisa umur seluruh sparepart {activeVehicle}.
                  </div>
                </section>
              </div>
            )}

            {activeModule === 'sparepart-status' && (
              <div className="w-full flex flex-col items-center space-y-4">
                <div className="w-full flex items-center justify-between px-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Daftar Komponen ({activeVehicle})</span>
                  <span className="text-xs font-semibold text-indigo-400">Odometer: {odometer[activeVehicle].toLocaleString()} KM</span>
                </div>

                {filteredParts.map((part) => {
                  const status = getHealthStatus(part.lastService, part.maxLife, odometer[activeVehicle]);
                  const isOverdue = status.usage >= part.maxLife;
                  const estimatedDate = getPredictedDate(status.remaining, currentInfo.avgDailyKm);

                  return (
                    <div key={part.id} className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-5 shadow-xl ring-1 ring-slate-200/50 dark:ring-slate-800/80 flex flex-col space-y-4 transition-all hover:shadow-2xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-base font-bold">{part.name}</h3>
                          <p className="text-[11px] text-slate-400">Maks. Usia: {part.maxLife.toLocaleString()} KM</p>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-bold flex items-center ${isOverdue ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' : 'bg-slate-800 text-slate-300 border border-slate-700'}`}>
                          {isOverdue ? <Wrench size={12} className="mr-1" /> : null}
                          {isOverdue ? `Lewat ${Math.abs(status.remaining).toLocaleString()} KM` : `Sisa ${status.remaining.toLocaleString()} KM`}
                        </div>
                      </div>

                      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden relative">
                        <div 
                          className={`h-full rounded-full transition-all duration-700 ${status.color}`}
                          style={{ width: `${status.percentage}%` }}
                        />
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center text-xs pt-1">
                        <div className="bg-slate-800/60 p-2.5 rounded-2xl flex flex-col justify-center border border-slate-700/40">
                          <span className="text-[10px] text-slate-400">Terakhir</span>
                          <span className="font-semibold text-slate-200">{part.lastDate}</span>
                        </div>
                        <div className="bg-slate-800/60 p-2.5 rounded-2xl flex flex-col justify-center border border-slate-700/40">
                          <span className="text-[10px] text-slate-400">Estimasi Habis</span>
                          <span className="font-semibold text-indigo-400">{estimatedDate}</span>
                        </div>
                        <div className="bg-slate-800/60 p-2.5 rounded-2xl flex flex-col justify-center border border-slate-700/40">
                          <span className="text-[10px] text-slate-400">Biaya Est.</span>
                          <span className="font-semibold text-slate-200">{part.price}</span>
                        </div>
                      </div>

                      <button 
                        onClick={() => handleService(part.id, part.name, part.price)}
                        className="w-full flex items-center justify-center py-3 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 rounded-2xl transition-colors font-bold text-xs shadow-md"
                      >
                        <CheckCircle2 size={14} className="mr-1.5" /> Catat Penggantian Baru
                      </button>
                    </div>
                  );
                })}
              </div>
            )}

            {activeModule === 'troubleshoot-log' && (
              <div className="w-full flex flex-col items-center space-y-4">
                <div className="w-full flex items-center justify-between px-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Detektor Gejala ({activeVehicle})</span>
                  <span className="text-xs font-semibold text-rose-400">{filteredSymptoms.length} Keluhan</span>
                </div>

                <form onSubmit={handleAddSymptom} className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-5 shadow-xl ring-1 ring-slate-200/50 dark:ring-slate-800/80 space-y-3">
                  <h3 className="text-sm font-bold flex items-center text-indigo-400">
                    <Stethoscope size={16} className="mr-2" /> Catat Gejala atau Keluhan Baru
                  </h3>
                  <input 
                    type="text"
                    placeholder="Contoh: Bunyi berdecit di roda depan..."
                    value={newSymptomTitle}
                    onChange={(e) => setNewSymptomTitle(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-800/60 border border-slate-700 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                  />
                  <div className="flex gap-2">
                    <select 
                      value={newSymptomSeverity}
                      onChange={(e) => setNewSymptomSeverity(e.target.value)}
                      className="px-3 py-2 bg-slate-800/60 border border-slate-700 rounded-xl text-xs text-slate-200 focus:outline-none"
                    >
                      <option value="Ringan">Ringan</option>
                      <option value="Sedang">Sedang</option>
                      <option value="Berat">Berat</option>
                    </select>
                    <input 
                      type="text"
                      placeholder="Catatan tambahan / dugaan..."
                      value={newSymptomNote}
                      onChange={(e) => setNewSymptomNote(e.target.value)}
                      className="flex-1 px-4 py-2 bg-slate-800/60 border border-slate-700 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-xs shadow-lg transition-transform active:scale-95 flex items-center justify-center"
                  >
                    <Plus size={14} className="mr-1.5" /> Simpan Keluhan
                  </button>
                </form>

                {filteredSymptoms.length === 0 ? (
                  <div className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 text-center text-slate-400 ring-1 ring-slate-200/50 dark:ring-slate-800/80">
                    Belum ada catatan gejala kejanggalan untuk kendaraan ini.
                  </div>
                ) : (
                  filteredSymptoms.map((sym) => (
                    <div key={sym.id} className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-5 shadow-xl ring-1 ring-slate-200/50 dark:ring-slate-800/80 flex flex-col space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold ${sym.severity === 'Berat' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' : sym.severity === 'Sedang' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'}`}>
                            {sym.severity}
                          </span>
                          <span className="text-xs text-slate-400">{sym.date}</span>
                        </div>
                        <button onClick={() => handleDeleteSymptom(sym.id)} className="text-slate-500 hover:text-rose-400 transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>

                      <h4 className="text-sm font-bold text-slate-100">{sym.title}</h4>
                      <p className="text-xs bg-slate-800/60 p-3 rounded-2xl text-slate-300 border border-slate-700/50">
                        💡 {sym.note}
                      </p>

                      <div className="flex justify-between items-center pt-1">
                        <button 
                          onClick={() => toggleSymptomStatus(sym.id)}
                          className={`text-xs font-bold px-3 py-1.5 rounded-xl border transition-colors ${sym.status === 'Selesai Diperbaiki' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-amber-500/10 text-amber-400 border-amber-500/30'}`}
                        >
                          {sym.status} (Klik Ubah)
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {activeModule === 'time-oil-reminder' && (
              <div className="w-full flex flex-col items-center space-y-4">
                <div className="w-full flex items-center justify-between px-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Pengingat Waktu Oli ({activeVehicle})</span>
                </div>

                {filteredTimeOil.map((item) => {
                  const { daysLeft, targetDateStr } = getTimeOilStatus(item.lastDate, item.maxMonths);
                  const isExpired = daysLeft <= 0;

                  return (
                    <div key={item.id} className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl ring-1 ring-slate-200/50 dark:ring-slate-800/80 flex flex-col space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-base font-bold">{item.name}</h3>
                          <p className="text-[11px] text-slate-400">{item.note}</p>
                        </div>
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${isExpired ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'}`}>
                          {isExpired ? 'Waktu Ganti Tiba!' : `${daysLeft} hari lagi`}
                        </span>
                      </div>

                      <div className="p-4 bg-slate-800/60 rounded-2xl space-y-2 border border-slate-700/50 text-xs">
                        <div className="flex justify-between text-slate-400">
                          <span>Ganti Terakhir:</span>
                          <strong className="text-slate-200">{item.lastDate}</strong>
                        </div>
                        <div className="flex justify-between text-slate-400">
                          <span>Batas Maksimal Waktu:</span>
                          <strong className="text-indigo-400">{targetDateStr} ({item.maxMonths} Bulan)</strong>
                        </div>
                      </div>

                      <button 
                        onClick={() => handleResetTimeOil(item.id)}
                        className="w-full flex items-center justify-center py-3 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-2xl transition-colors font-bold text-xs shadow-md"
                      >
                        <CheckCircle2 size={14} className="mr-1.5" /> Perbarui Waktu Ganti Oli Hari Ini
                      </button>
                    </div>
                  );
                })}
              </div>
            )}

            {activeModule === 'periodic-checklist' && (
              <div className="w-full flex flex-col items-center space-y-4">
                <section className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl shadow-xl ring-1 ring-slate-200/50 dark:ring-slate-800/80 p-6 flex flex-col space-y-4">
                  <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">
                    <CheckSquare size={14} />
                    <span>Daftar Periksa Servis ({activeVehicle})</span>
                  </div>
                  <p className="text-xs text-slate-400">Centang item pengerjaan di bawah ini saat mekanik melakukan pemeriksaan rutin.</p>

                  <div className="space-y-3 pt-2">
                    {filteredChecklist.map((item) => (
                      <div 
                        key={item.id} 
                        onClick={() => toggleChecklist(item.id)}
                        className={`w-full p-4 rounded-2xl flex items-center justify-between cursor-pointer transition-all ${item.checked ? 'bg-indigo-500/10 border border-indigo-500/20' : 'bg-slate-800/60 border border-slate-700/50'}`}
                      >
                        <div className="flex items-center space-x-3">
                          <button className="text-indigo-400">
                            {item.checked ? <CheckSquare size={20} /> : <Square size={20} className="text-slate-500" />}
                          </button>
                          <span className={`text-xs font-semibold ${item.checked ? 'line-through text-slate-500' : 'text-slate-200'}`}>
                            {item.item}
                          </span>
                        </div>
                        <span className="text-[10px] bg-slate-700 px-2.5 py-1 rounded-lg text-slate-300 font-medium">
                          {item.package}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {activeModule === 'service-history' && (
              <div className="w-full flex flex-col items-center space-y-4">
                <div className="w-full flex items-center justify-between px-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Arsip Servis ({activeVehicle})</span>
                  <span className="text-xs font-semibold text-indigo-400">{filteredHistory.length} Catatan</span>
                </div>

                {filteredHistory.length === 0 ? (
                  <div className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 text-center text-slate-400 ring-1 ring-slate-200/50 dark:ring-slate-800/80">
                    Belum ada riwayat servis tercatat untuk kendaraan ini.
                  </div>
                ) : (
                  filteredHistory.map((history) => (
                    <div key={history.id} className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-5 shadow-xl ring-1 ring-slate-200/50 dark:ring-slate-800/80 flex flex-col space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-bold">{history.partName}</h3>
                        <span className="text-xs font-bold text-indigo-400">{history.cost}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-xs text-slate-400">
                        <span>📅 {history.date}</span>
                        <span>•</span>
                        <span>📍 Odometer: {history.km.toLocaleString()} KM</span>
                      </div>
                      <p className="text-xs bg-slate-800/60 p-3 rounded-2xl text-slate-300 border border-slate-700/50">
                        💬 &ldquo;{history.mechanicNotes}&rdquo;
                      </p>
                    </div>
                  ))
                )}
              </div>
            )}

            {activeModule === 'expense-tracker' && (
              <div className="w-full flex flex-col items-center space-y-4">
                <section className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl shadow-xl ring-1 ring-slate-200/50 dark:ring-slate-800/80 p-6 flex flex-col items-center text-center">
                  <div className="p-4 bg-gradient-to-br from-indigo-500 to-blue-600 text-white rounded-2xl mb-3 shadow-md">
                    <Wallet size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-bold mb-1">Akumulasi Biaya Pemeliharaan</h3>
                  <p className="text-xs text-slate-400 mb-6">Total pengeluaran tercatat untuk {activeVehicle}</p>

                  <div className="text-3xl font-black text-indigo-400 mb-6 bg-slate-800/80 py-4 px-8 rounded-2xl w-full border border-slate-700/60 shadow-inner">
                    Rp 920.000
                  </div>

                  <div className="w-full space-y-2 text-left text-xs">
                    <div className="flex justify-between p-3.5 bg-slate-800/50 rounded-xl border border-slate-700/40">
                      <span className="text-slate-400">Total Biaya Servis & Sparepart</span>
                      <span className="font-semibold text-slate-200">Rp 855.000</span>
                    </div>
                    <div className="flex justify-between p-3.5 bg-slate-800/50 rounded-xl border border-slate-700/40">
                      <span className="text-slate-400">Estimasi Pajak Tahunan</span>
                      <span className="font-semibold text-slate-200">Rp 65.000</span>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {activeModule === 'driver-license' && (
              <div className="w-full flex flex-col items-center space-y-4">
                <section className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl shadow-xl ring-1 ring-slate-200/50 dark:ring-slate-800/80 p-6 flex flex-col space-y-4">
                  <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">
                    <CreditCard size={14} />
                    <span>Masa Berlaku SIM Pengemudi</span>
                  </div>
                  <p className="text-xs text-slate-400">Pastikan Surat Izin Mengemudi selalu diperpanjang sebelum masa berlakunya habis.</p>

                  <div className="space-y-3 pt-2">
                    {driverLicenses.map((sim) => {
                      const simDaysLeft = getCountdownDays(sim.expiryDate);
                      return (
                        <div key={sim.id} className="p-4 bg-slate-800/70 rounded-2xl space-y-2 border border-slate-700/50">
                          <div className="flex justify-between items-center">
                            <span className="text-xs font-bold text-slate-200">{sim.type}</span>
                            <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${simDaysLeft <= 90 ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'}`}>
                              {simDaysLeft > 0 ? `${simDaysLeft} hari lagi` : 'Sudah Berakhir!'}
                            </span>
                          </div>
                          <div className="flex justify-between text-xs text-slate-400">
                            <span>No: <strong className="font-mono text-slate-300">{sim.number}</strong></span>
                            <span>Exp: {sim.expiryDate}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              </div>
            )}

            {activeModule === 'emergency-docs' && (
              <div className="w-full flex flex-col items-center space-y-4">
                <section className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl shadow-xl ring-1 ring-slate-200/50 dark:ring-slate-800/80 p-6 flex flex-col space-y-4">
                  <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">
                    <ShieldAlert size={14} />
                    <span>Darurat & Lokasi Dokumen ({activeVehicle})</span>
                  </div>

                  <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-2xl flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-rose-400">Layanan Towing / Derek</span>
                      <p className="text-sm font-mono font-bold text-rose-300">{currentInfo.towingNumber}</p>
                    </div>
                    <a href={`tel:${currentInfo.towingNumber}`} className="p-3 bg-rose-600 hover:bg-rose-500 text-white rounded-xl shadow-lg transition-transform active:scale-95">
                      <PhoneCall size={18} />
                    </a>
                  </div>

                  <div className="p-4 bg-slate-800/60 rounded-2xl space-y-1 border border-slate-700/50">
                    <span className="text-[10px] uppercase font-bold text-slate-400">Asuransi Kendaraan</span>
                    <p className="text-xs font-semibold text-slate-200">{currentInfo.insurance}</p>
                  </div>

                  <div className="p-4 bg-slate-800/60 rounded-2xl space-y-1 border border-slate-700/50">
                    <span className="text-[10px] uppercase font-bold text-slate-400">Lokasi Penyimpanan Dokumen Fisik</span>
                    <p className="text-xs font-semibold text-slate-200">📍 {currentInfo.docLocation}</p>
                  </div>
                </section>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
}