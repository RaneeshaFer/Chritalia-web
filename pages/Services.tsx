
import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, CheckCircle2, Package, TrendingUp, Cpu, Factory, ShoppingBag, FlaskConical, Car } from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const industries = [
    { label: 'Manufacturing', icon: <Factory className="w-5 h-5" /> },
    { label: 'Retail', icon: <ShoppingBag className="w-5 h-5" /> },
    { label: 'Distribution', icon: <Package className="w-5 h-5" /> },
    { label: 'Automotive', icon: <Car className="w-5 h-5" /> },
    { label: 'Food & Beverage', icon: <FlaskConical className="w-5 h-5" /> },
    { label: 'Technology', icon: <Cpu className="w-5 h-5" /> },
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="gradient-navy py-24 mb-20 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <Truck className="w-full h-full rotate-12 scale-150" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl font-black mb-6">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Precision logistics, domestic mastery, and international reach. 
            Discover how Chritalia SAS powers your supply chain.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-16">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-24">
          {SERVICES.map((service, idx) => (
            <div key={service.id} className="group">
              <div className="flex items-center space-x-6 mb-8">
                <div className="w-20 h-20 bg-emerald-600 rounded-3xl flex items-center justify-center text-white shadow-xl">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-bold text-slate-900">{service.title}</h2>
              </div>
              <img 
                src={`https://picsum.photos/id/${100 + idx}/800/400`} 
                alt={service.title} 
                className="w-full h-80 object-cover rounded-[2.5rem] mb-8 shadow-lg"
              />
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {service.description} With years of operational excellence, we ensure your goods are treated with the highest care. Our {service.title.toLowerCase()} solution includes real-time tracking, documentation management, and 24/7 support.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Full Load (FTL) & Part Load (LTL)',
                  'Real-time GPS Monitoring',
                  'Verified EU Compliance',
                  'Customized Route Planning'
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Industries Served */}
          <section className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Industries We Serve</h3>
            <div className="flex flex-wrap gap-4">
              {industries.map((ind) => (
                <div key={ind.label} className="bg-white px-6 py-4 rounded-2xl flex items-center space-x-3 shadow-sm border border-gray-100 hover:border-emerald-200 transition-colors">
                  <div className="text-emerald-600">{ind.icon}</div>
                  <span className="font-bold text-slate-700">{ind.label}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar Quote Form */}
        <aside className="lg:col-span-1">
          <div className="sticky top-32 bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl text-white">
            <TrendingUp className="w-12 h-12 text-emerald-500 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Start Growing Your Business</h3>
            <p className="text-slate-400 mb-8">Get a customized logistics quote today. Our team will analyze your requirements and provide the most efficient route and cost solution.</p>
            
            <form className="space-y-4 mb-8">
              <input 
                type="text" 
                placeholder="Company Name" 
                className="w-full bg-slate-800 border-0 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500"
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-slate-800 border-0 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500"
              />
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all">
                Request Quick Quote
              </button>
            </form>

            <div className="pt-6 border-t border-slate-800 text-sm text-slate-500 text-center">
              We respond quickly during business hours.
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Services;
