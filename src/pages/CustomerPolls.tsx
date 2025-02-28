import { useState, useEffect } from "react";
import styles from "../css/customerPolls.module.css";
import { FaChartBar } from "react-icons/fa";

const dishes = [
  { id: 1, name: "Lamb Shank", emoji: "🥩" },
  { id: 2, name: "Grilled Salmon", emoji: "🐟" },
  { id: 3, name: "Fesenjan", emoji: "🍗" },
];

const CustomerPolls = () => {
  const [votes, setVotes] = useState<{ [key: number]: number }>({});
  const [voted, setVoted] = useState(false);
  const [highestVoted, setHighestVoted] = useState<number | null>(null);

  useEffect(() => {
    if (Object.keys(votes).length > 0) {
      const maxVotes = Math.max(...Object.values(votes));
      const topDish = Object.keys(votes).find(
        (key) => votes[parseInt(key)] === maxVotes
      );
      setHighestVoted(topDish ? parseInt(topDish) : null);
    }
  }, [votes]);

  const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);

  const vote = (dishId: number) => {
    if (!voted) {
      setVotes((prevVotes) => ({
        ...prevVotes,
        [dishId]: (prevVotes[dishId] || 0) + 1,
      }));
      setVoted(true);
    }
  };

  return (
    <section className={styles.pollSection}>
      <h2>Vote for Your Favorite Dish! 🍽️</h2>
      <div className={styles.pollOptions}>
        {dishes.map((dish) => (
          <div
            key={dish.id}
            className={`${styles.pollOption} ${
              highestVoted === dish.id ? styles.winner : ""
            }`}
          >
            <button onClick={() => vote(dish.id)} disabled={voted}>
              {dish.emoji} {dish.name}
            </button>
            <div className={styles.progressBarContainer}>
              <div
                className={styles.progressBar}
                style={{
                  width: `${
                    ((votes[dish.id] || 0) / (totalVotes || 1)) * 100
                  }%`,
                }}
              ></div>
            </div>
            <p>
              {(((votes[dish.id] || 0) / (totalVotes || 1)) * 100).toFixed(1)}%
              votes
            </p>
          </div>
        ))}
      </div>
      {voted && highestVoted !== null && (
        <div className={styles.winnerMessage}>
          <FaChartBar className={styles.icon} />
          <p>
            Current Top Dish:{" "}
            <strong>
              {dishes.find((dish) => dish.id === highestVoted)?.name}
            </strong>{" "}
            🎉
          </p>
        </div>
      )}
      <p className={styles.totalVotes}>Total Votes: {totalVotes}</p>
    </section>
  );
};

export default CustomerPolls;
