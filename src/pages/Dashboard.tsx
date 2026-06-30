// src/pages/Dashboard.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import productsData from '../products.json'; 

export const Dashboard: React.FC = () => {
  const totalProducts = productsData.products.length;

  const [stats] = useState({
    totalOrdersThisMonth: 142,
    clientQueriesPending: 8, // New metrics placeholder
    newOrders24h: 12
  });

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cardsConfig = [
    {
      title: 'Total Products',
      value: totalProducts,
      footer: '✓ Active in inventory',
      footerColor: '#10b981',
      borderColor: 'transparent'
    },
    {
      title: 'Total Orders (Month)',
      value: stats.totalOrdersThisMonth,
      footer: 'Target pacing normally',
      footerColor: '#3b82f6',
      borderColor: 'transparent'
    },
    {
      title: 'Client Queries',
      value: stats.clientQueriesPending,
      footer: 'Requires agent response',
      footerColor: '#ef4444',
      borderColor: '#ef4444' // Red left accent border for urgent look
    },
    {
      title: 'New Orders (24 Hours)',
      value: stats.newOrders24h,
      footer: 'Requires fulfillment actions',
      footerColor: '#64748b',
      borderColor: '#f59e0b'
    }
  ];

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#1e293b', margin: 0 }}>
          Welcome back, Admin!
        </h1>
        <p style={{ color: '#64748b', marginTop: '0.25rem' }}>
          Here is an overview of your store's performance today.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
        gap: '1.5rem', 
        marginBottom: '2.5rem' 
      }}>
        {cardsConfig.map((card, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                backgroundColor: '#fff',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                borderLeft: card.borderColor !== 'transparent' ? `4px solid ${card.borderColor}` : 'none',
                transform: isHovered ? 'translateY(-5px)' : 'translateY(0px)',
                boxShadow: isHovered 
                  ? '0 10px 20px -5px rgba(15, 23, 42, 0.15), 0 8px 8px -5px rgba(15, 23, 42, 0.1)' 
                  : '0 1px 3px rgba(0,0,0,0.1)',
                transition: 'all 0.25s ease-in-out',
                cursor: 'default'
              }}
            >
              <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#64748b', textTransform: 'uppercase' }}>
                {card.title}
              </div>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#0f172a', marginTop: '0.5rem' }}>
                {card.value}
              </div>
              <div style={{ fontSize: '0.75rem', color: card.footerColor, marginTop: '0.5rem' }}>
                {card.footer}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1e293b', marginBottom: '1rem', marginTop: 0 }}>
          ⚡ Quick Administrative Actions
        </h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/admin/products" style={{ padding: '0.75rem 1.25rem', backgroundColor: '#3b82f6', color: '#fff', textDecoration: 'none', borderRadius: '0.375rem', fontWeight: '500', fontSize: '0.875rem' }}>
            📋 Manage Product Catalog
          </Link>
          <Link to="/admin/orders" style={{ padding: '0.75rem 1.25rem', backgroundColor: '#6366f1', color: '#fff', textDecoration: 'none', borderRadius: '0.375rem', fontWeight: '500', fontSize: '0.875rem' }}>
            📦 View Incoming Orders
          </Link>
          <Link to="/admin/queries" style={{ padding: '0.75rem 1.25rem', backgroundColor: '#ef4444', color: '#fff', textDecoration: 'none', borderRadius: '0.375rem', fontWeight: '500', fontSize: '0.875rem' }}>
            💬 Respond to Client Queries
          </Link>
        </div>
      </div>
    </div>
  );
};