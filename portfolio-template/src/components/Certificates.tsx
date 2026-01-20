import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import certificate1 from "../../certificate1.png";
import certificate2 from "../../certificate2.png";

const certificates = [
  {
    id: 1,
    title: "Certificate 1",
    image: certificate1,
    alt: "Certificate 1",
  },
  {
    id: 2,
    title: "Certificate 2",
    image: certificate2,
    alt: "Certificate 2",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Certificates</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="card-glass overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-secondary flex items-center justify-center p-4">
                  <img
                    src={cert.image}
                    alt={cert.alt}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

