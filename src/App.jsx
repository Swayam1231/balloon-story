import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

const App = () => {
  const storyParts = [
    {
      id: 'part1',
      title: 'The Beginning',
      content: `Once upon a time, a lone balloon floated into the vast world—its delicate frame soaring like the dreams of a student embarking on a new journey. The streets stretched endlessly below, and the balloon drifted quietly, its fragile spirit dancing with the unknown.`,
      animationType: 'fadeIn',
    },
    {
      id: 'part2',
      title: 'The First Challenge',
      content: `With each gust of wind, the balloon wavered, a reflection of the challenges faced. Yet, it never fell. Instead, it rose higher, buoyed by resilience, much like the student, who finds strength in victories, no matter how small.`,
      animationType: 'slideInLeft',
    },
    {
      id: 'part3',
      title: 'The Glimmer of Hope',
      content: `As it passed tall, glowing towers—symbols of hope, shining bright—the student saw in them the dreams he pursued. Yet beneath their golden light, shadows of doubt began to creep in, whispering, "Will I ever make it?"`,
      animationType: 'slideInRight',
    },
    {
      id: 'part4',
      title: 'The Weight of Doubt',
      content: `This fear weighed heavy on the balloon, just as it did in the heart of every student striving to succeed. For every balloon that rises to meet the sky must face the wind, the wear, the weight. It may falter, its journey brief and uncertain.`,
      animationType: 'zoomIn',
    },
    {
      id: 'part5',
      title: 'The Triumph',
      content: `Yet, in its flight, both fleeting and radiant, it finds its purpose. It dances through the air, and though the path may be filled with twists and turns, it eventually finds its place in the endless light.`,
      animationType: 'fadeIn',
    },
    {
      id: 'part6',
      title: 'The Endless Light',
      content: `Just as the student, through perseverance and hope, finds their way in the vastness of life. The balloon, now a symbol of resilience, continues to soar, inspiring others to rise above their challenges.`,
      animationType: 'slideInLeft',
    },
  ];

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/background.jpg')" }}>
      <Header />
      {storyParts.map((part) => (
        <Section
          key={part.id}
          id={part.id}
          title={part.title}
          content={part.content}
          animationType={part.animationType}
        />
      ))}
      <Footer />
    </div>
  );
};

export default App;