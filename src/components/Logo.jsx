import React from 'react';
import { FaCommentDots } from 'react-icons/fa';

export const LoveWalkLogo = ({ size = 'medium' }) => {
  const isSmall = size === 'small';
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '2px',
      color: '#FFFFFF',
      fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      userSelect: 'none',
      letterSpacing: '-0.5px'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        lineHeight: 1
      }}>
        <span style={{
          fontSize: isSmall ? '8px' : '10px',
          fontWeight: '700',
          textTransform: 'lowercase',
          opacity: 0.9,
          marginBottom: '-2px'
        }}>
          the
        </span>
        <span style={{
          fontSize: isSmall ? '18px' : '24px',
          fontWeight: '900',
          textTransform: 'uppercase',
          letterSpacing: '0px'
        }}>
          LOVE
        </span>
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'baseline',
        fontSize: isSmall ? '18px' : '24px',
        fontWeight: '900',
        textTransform: 'uppercase',
        marginLeft: '2px'
      }}>
        <span style={{ position: 'relative' }}>
          w
        </span>
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}>
          a
          <FaCommentDots style={{
            position: 'absolute',
            top: '-2px',
            right: '-1px',
            fontSize: isSmall ? '8px' : '10px',
            color: '#EA3A15'
          }} />
        </span>
        <span>lk</span>
      </div>
    </div>
  );
};
