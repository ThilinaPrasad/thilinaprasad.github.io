import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from "framer-motion";
import { LinkPreview } from "@/components/LinkPreview";
import { BlurImage } from "./BlurImage";
import HoverPattern from "./Hover/HoverPattern";
import AchievementCard from "./AchievementCard";
import LargeAchievementCard from "./LargeAchievementCard";

const Achievements = () => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function onMouseMove({ currentTarget, clientX, clientY }) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
      <div className="mt-4">
        <h1 className="font-bold text-2m">🎓 Certifications</h1>
        <div className="md:grid md:grid-cols-2 gap-x-4">
          {/* <LargeAchievementCard
                title={'AWS Certified'}
                description={'AWS Certified Solutions Architect – Associate'}
                image={'/certifications/aws.png'}
                width={100}
                height={100}
                link={'https://www.credly.com/badges/9dfbafd4-6fa6-4da6-81c5-e533b3358d1d'}
            />
            <LargeAchievementCard
                title={'Kubernetes Certified (Pending)'}
                description={'Certified Kubernetes Application Developer'}
                image={'/certifications/ckad.png'}
                width={100}
                height={100}
                link={'https://www.credly.com/badges/9dfbafd4-6fa6-4da6-81c5-e533b3358d1d'}
            /> */}
          <AchievementCard
            title={"AWS Certified"}
            description={"AWS Certified Solutions Architect – Associate"}
            image={"/certifications/aws.png"}
            width={100}
            height={100}
            link={
              "https://www.credly.com/badges/9dfbafd4-6fa6-4da6-81c5-e533b3358d1d"
            }
          />
          <AchievementCard
            title={"Kubernetes Certified (Pending)"}
            description={"Certified Kubernetes Application Developer"}
            image={"/certifications/ckad.png"}
            width={100}
            height={100}
            link={
              "https://www.credly.com/badges/9dfbafd4-6fa6-4da6-81c5-e533b3358d1d"
            }
          />
        </div>
      </div>
    );
};

export default Achievements;