import { View, Text, StyleSheet } from "react-native";
import { format, parseISO } from "date-fns";
import { fr } from "date-fns/locale";

export default function TripCard({ trip }) {
    const departure = parseISO(`${trip.date}T${trip.time}`);

    const dateLabel = format(
        departure,
        "EEEE d MMMM 'à' HH'h'mm",
        { locale: fr }
    );

    return (
        <View style={styles.card}>
            <View style={styles.row}>
                <Text style={styles.route}>
                    {trip.departure} → {trip.arrival}
                </Text>

                <Text style={styles.price}>
                    {trip.price} €
                </Text>
            </View>

            <Text>Départ : {dateLabel}</Text>
            <Text>Places disponibles : {trip.availableSeats}</Text>
            <Text>Conducteur : {trip.driver.name}</Text>
        </View>
    );
}