// src/pages/Dashboard.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import productsData from '../products.json'; // Direct reference to products (1).json

export const Dashboard: React.FC = () => {
  // Extract total products count directly from the verified data array
  const totalProducts = productsData.products.length;

  // Simulated metrics for the month/last 24 hours as outlined in Flow 1 Step 3
  const [stats] = useState({
    totalOrdersThisMonth: 142,
    monthlyRevenue: 45280,
    newOrders24h: 12
  });

  return (
    <div>
      {/* Welcome Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#1e293b', margin: 0 }}>
          Welcome back, Admin!
        </h1>
        <p style={{ color: '#64748b', marginTop: '0.25rem' }}>
          Here is an overview of your store's performance today.
        </p>
      </div>

      {/* Quick Stats Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
        gap: '1.5rem', 
        marginBottom: '2.5rem' 
      }}>
        {/* Total Products (Calculated from file) */}
        <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#64748b', textTransform: 'uppercase' }}>Total Products</div>
          <div style={{ fontSize: '2rem', fontWeight: '700', color: '#0f172a', marginTop: '0.5rem' }}>{totalProducts}</div>
          <div style={{ fontSize: '0.75rem', color: '#10b981', marginTop: '0.5rem' }}>✓ Active in inventory</div>
        </div>

        {/* Total Orders This Month */}
        <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#64748b', textTransform: 'uppercase' }}>Total Orders (Month)</div>
          <div style={{ fontSize: '2rem', fontWeight: '700', color: '#0f172a', marginTop: '0.5rem' }}>{stats.totalOrdersThisMonth}</div>
          <div style={{ fontSize: '0.75rem', color: '#3b82f6', marginTop: '0.5rem' }}>Target pacing normally</div>
        </div>

        {/* Revenue This Month */}
        <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#64748b', textTransform: 'uppercase' }}>Revenue (Month)</div>
          <div style={{ fontSize: '2rem', fontWeight: '700', color: '#0f172a', marginTop: '0.5rem' }}>${stats.monthlyRevenue.toLocaleString()}</div>
          <div style={{ fontSize: '0.75rem', color: '#10b981', marginTop: '0.5rem' }}>+12.4% vs last month</div>
        </div>

        {/* New Orders (Last 24 Hours) */}
        <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', borderLeft: '4px solid #f59e0b' }}>
          <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#64748b', textTransform: 'uppercase' }}>New Orders (24 Hours)</div>
          <div style={{ fontSize: '2rem', fontWeight: '700', color: '#f59e0b', marginTop: '0.5rem' }}>{stats.newOrders24h}</div>
          <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.5rem' }}>Requires fulfillment actions</div>
        </div>
      </div>

      {/* Quick Links To Main Sections */}
      <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1e293b', marginBottom: '1rem', marginTop: 0 }}>
          ⚡ Quick Administrative Actions
        </h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/admin/products" style={{ 
            padding: '0.75rem 1.25rem', 
            backgroundColor: '#3b82f6', 
            color: '#fff', 
            textDecoration: 'none', 
            borderRadius: '0.375rem', 
            fontWeight: '500',
            fontSize: '0.875rem'
          }}>
            📋 Manage Product Catalog
          </Link>
          <Link to="/admin/products/new" style={{ 
            padding: '0.75rem 1.25rem', 
            backgroundColor: '#10b981', 
            color: '#fff', 
            textDecoration: 'none', 
            borderRadius: '0.375rem', 
            fontWeight: '500',
            fontSize: '0.875rem'
          }}>
            ➕ Add New Product
          </Link>
          <Link to="/admin/orders" style={{ 
            padding: '0.75rem 1.25rem', 
            backgroundColor: '#6366f1', 
            color: '#fff', 
            textDecoration: 'none', 
            borderRadius: '0.375rem', 
            fontWeight: '500',
            fontSize: '0.875rem'
          }}>
            📦 View Incoming Orders
          </Link>
        </div>
      </div>
    </div>
  );
};