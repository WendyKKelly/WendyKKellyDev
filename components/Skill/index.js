import React from 'react';
import Link from 'next/link';
import Icon from 'react-icons-kit';
import { socialDribbbleOutline } from 'react-icons-kit/ionicons/socialDribbbleOutline';
import { SkillWrapper, SkillItem } from './skill.style';

const Skill = ({ items, className, iconSize }) => {
  const addAllClasses = ['social_profiles'];

  if (className) {
    addAllClasses.push(className);
  }

  return (
    <SkillWrapper className={addAllClasses.join(' ')}>
      {items.map((item, index) => (
        <SkillItem key={`social-item-${index}`} className="social_profile_item">
          <Link href={item.url || '#'}>
            <a aria-label="social icon">
              <Icon
                icon={item.icon || socialDribbbleOutline}
                content={item.title || 'title'}
                size={iconSize || 22}
              />
            </a>
          </Link>
        </SkillItem>
      ))}
    </SkillWrapper>
  );
};

export default Skill;
